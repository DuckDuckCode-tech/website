import { Button } from "@/components/ui/button";
import Link from "next/link";
// Include the font in your global CSS or _document.tsx file


export default function Home() {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Get Started Section */}
            <section
                className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center px-4 text-center pt-14"
                style={{ backgroundImage: "url('/backgroundmain.jpg')" }}
            >
                <div className="space-y-4 max-w-4xl">
                    <div className="text-center">
                        <h1
                            className="text-4xl sm:text-5xl md:text-6xl font-bold text-black"
                            style={{ fontFamily: "'Baloo Bhaijaan', cursive" }}
                        >
                            Welcome to
                        </h1>
                        <img 
                            src="/t-logo.png" 
                            alt="Duck Duck Code Logo" 
                            className="h-50 w-auto mx-auto"
                        />
                    </div>
                    <p className="text-muted-foreground text-lg sm:text-xl max-w-[900px] mx-auto">
                        Code smarter, not harder. Effortless coding is here. <br />
                        Our AI DevTool simplifies coding for everyone, tech or not. <br />
                        Connect your Git repo, let it work its magic, and review changes before committing. <br />
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg" className="bg-[#6bebe9] text-foreground hover:bg-[#5cd6d4]">
                            <Link href="/chat">
                                Get Started
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
            {/* About Section*/}
                <section className="py-20 px-4 bg-background relative" id="about">
                    <div className="container mx-auto max-w-5xl">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-10 text-center">
                            About Our Platform
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                            <div className="flex flex-col items-center text-center space-y-4 w-full">
                                <div className="bg-[#fffddd] p-4 rounded-full">
                                    <span className="text-primary font-bold text-xl">1</span>
                                </div>
                                <h3 className="text-xl font-bold">Code Smarter, Ship Faster</h3>
                                <p className="text-muted-foreground">The AI-powered devtool that accelerates product development.</p>
                            </div>
                            <div className="flex flex-col items-center text-center space-y-4 w-full">
                                <div className="bg-[#fffddd] p-4 rounded-full">
                                    <span className="text-primary font-bold text-xl">2</span>
                                </div>
                                <h3 className="text-xl font-bold">PRs at the Speed of Thought</h3>
                                <p className="text-muted-foreground">Login, select a repo, and use human language to instantly generate pull requests.</p>
                            </div>
                            <div className="flex flex-col items-center text-center space-y-4 w-full">
                                <div className="bg-[#fffddd] p-4 rounded-full">
                                    <span className="text-primary font-bold text-xl">3</span>
                                </div>
                                <h3 className="text-xl font-bold">Stop the Wild Goose Chase</h3>
                                <p className="text-muted-foreground">Quit ducking around chasing geese, use DuckDuckCode.</p>
                            </div>
                        </div>
                    </div>

                    {/* Bottom-left feet image */}
                    <img
                        src="/feet-left.png"
                        alt="Feet Left"
                        className="absolute bottom-0 left-0 h-20 w-auto"
                    />

                    {/* Top-right feet image */}
                    <img
                        src="/feet-right.png"
                        alt="Feet Right"
                        className="absolute top-0 right-0 h-20 w-auto"
                    />
                </section>

                        <section className="py-20 px-4 bg-[#fbf9ed]" id="get-started">
            <div className="container mx-auto max-w-5xl">
                <div className="flex items-center justify-center gap-4 mb-10">
                    <img 
                        src="/rubber-duck-left.png" 
                        alt="Rubber Duck Left" 
                        className="h-15 w-auto"
                    />
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">
                        Get Started in Minutes
                    </h2>
                    <img 
                        src="/rubber-duck-right.png" 
                        alt="Rubber Duck Right" 
                        className="h-15 w-auto"
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                    <div className="bg-[#fffddd] p-2 rounded-full">                        <span className="text-primary font-bold">1</span>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold">Create an account</h3>
                        <p className="text-muted-foreground">Sign up and connect your GitHub account to get started.</p>
                    </div>
                    </div>
                    <div className="flex items-start gap-4">
                    <div className="bg-[#fffddd] p-2 rounded-full">                        <span className="text-primary font-bold">2</span>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold">Select a repository</h3>
                        <p className="text-muted-foreground">Choose from your GitHub repositories to create a new project.</p>
                    </div>
                    </div>
                    <div className="flex items-start gap-4">
                    <div className="bg-[#fffddd] p-2 rounded-full">                        <span className="text-primary font-bold">3</span>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold">Start shipping</h3>
                        <p className="text-muted-foreground">Immediately start making code changes with natural language.</p>
                    </div>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg" className="bg-[#6bebe9] text-foreground hover:bg-[#5cd6d4]">
                            <Link href="/chat">
                                Get Started
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
            </section>

        {/* Footer */}
        <footer className="py-10 px-4 border-t">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <p className="text-sm text-muted-foreground">© 2025 DuckDuckCode. All rights reserved.</p>
                </div>
            </div>
        </footer>
    </div>
  )
}