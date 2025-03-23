import { LucideGithub } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function LoginPage() {
    const clientId = "Iv23liqvu5cGEtM5aQcC";

    return (
        <div
                className="flex min-h-screen w-screen flex-col items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: "url('/background.png')" }}
            >
                <Card className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[650px] p-10 bg-white bg-opacity-90 shadow-lg rounded-lg">
                    <div className="flex flex-col space-y-4 text-center">
                        <h1
                            className="text-2xl font-semibold tracking-tight text-black"
                            style={{ fontFamily: "'Baloo Bhaijaan', cursive" }}
                        >
                            Welcome to
                        </h1>
                        <img
                            src="/t-logo.png"
                            alt="DuckDuckCode Logo"
                            className="h-16 w-auto mx-auto"
                        />
                        <p className="text-sm text-muted-foreground">Login with your GitHub account to continue.</p>
                    </div>
            
                    <a
                        href="https://github.com/apps/duckduckcode-tech/installations/new"
                        className="w-full inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                    >
                        <LucideGithub className="mr-2 h-4 w-4" />
                        Login with GitHub
                    </a>
                </Card>
            </div>
    );
}