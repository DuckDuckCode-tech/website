"use client";

import Link from "next/link";
import { useState } from "react";
import { LucideSearch, LucideTrash } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useSidebarState } from "@/context/SidebarContext";
import { CreateProjectButton } from "./CreateProjectButton";
import { Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarRail } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface RepoSidebarProps {}

export function RepoSidebar({}: RepoSidebarProps) {
    const router = useRouter();

    const [sidebarState, setSidebarState] = useSidebarState();
    const { userRepositories } = sidebarState;

    const [searchQuery, setSearchQuery] = useState("");
    const filteredRepos = userRepositories.filter((repo) => repo.repositoryName.toLowerCase().includes(searchQuery.toLowerCase())).sort((a, b) => new Date(b.lastUpdatedAt).getTime() - new Date(a.lastUpdatedAt).getTime());

    return (
        <Sidebar collapsible="none" className="min-w-60">
            <SidebarHeader className="p-4">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold">Projects</h2>
                </div>
                <div className="relative">
                    <LucideSearch className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        type="search"
                        placeholder="Search repositories..."
                        className="pl-8"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarMenu className="p-2">
                    <CreateProjectButton />

                    {filteredRepos.length > 0 ? (
                        filteredRepos.map((repo) => (
                            <SidebarMenuItem key={`repository-${repo.repositoryName}`} className="flex flex-row justify-between gap-1">
                                <Link href={`/chat/${repo.repositoryName}`} className="grow">
                                    <SidebarMenuButton className="justify-start">
                                        {repo.repositoryName}
                                    </SidebarMenuButton>
                                </Link>

                                <Button size="sm" onClick={async () => {
                                    const response = await fetch(`/api/repository/${repo.repositoryName}`, {
                                        method: "DELETE"
                                    });

                                    if (response.ok) {
                                        setSidebarState((prevState) => ({
                                            ...prevState,
                                            userRepositories: prevState.userRepositories.filter((r) => r.repositoryName !== repo.repositoryName),
                                        }));

                                        router.push("/chat")
                                    } else {
                                        console.error("Failed to delete repository");
                                    }
                                }}>
                                    <LucideTrash className="w-1 h-1" />
                                </Button>
                            </SidebarMenuItem>
                        ))
                    ) : (
                        <div className="px-4 py-3 text-sm text-muted-foreground">No repositories found</div>
                    )}
                </SidebarMenu>
            </SidebarContent>
            <SidebarRail />
        </Sidebar>
    );
}
