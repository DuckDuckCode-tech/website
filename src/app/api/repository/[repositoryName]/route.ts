import "server-only";

import { Octokit } from "octokit";
import { DynamoDBService } from "@/lib/ddb";
import { NextRequest, NextResponse } from "next/server";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";

interface RepositoryRouteParams {
    params: Promise<{
        repositoryName: string;
    }>;
}

export async function GET(request: NextRequest, { params }: RepositoryRouteParams): Promise<NextResponse> {
    const repositoryName = (await params).repositoryName;;

    const accessToken = request.cookies.get("accessToken")?.value;
    if (!accessToken) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const octokit = new Octokit({ auth: accessToken });
    const userInfo = await octokit.rest.users.getAuthenticated();

    const ddbClient = new DynamoDBClient();
    const ddbService = new DynamoDBService(ddbClient);
    const repositoryItem = await ddbService.getRepository(userInfo.data.id.toString(), repositoryName);
    if (!repositoryItem) {
        return NextResponse.json({ error: "Repository not found" }, { status: 404 });
    }

    return NextResponse.json({
        repositoryItem
    }, { status: 200 });
}

export async function DELETE(request: NextRequest, { params }: RepositoryRouteParams): Promise<NextResponse> {
    const repositoryName = (await params).repositoryName;;

    const accessToken = request.cookies.get("accessToken")?.value;
    if (!accessToken) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const octokit = new Octokit({ auth: accessToken });
    const userInfo = await octokit.rest.users.getAuthenticated();

    const ddbClient = new DynamoDBClient();
    const ddbService = new DynamoDBService(ddbClient);
    const repositoryItem = await ddbService.getRepository(userInfo.data.id.toString(), repositoryName);
    if (!repositoryItem) {
        return NextResponse.json({ error: "Repository not found" }, { status: 404 });
    }

    await ddbService.deleteRepository(userInfo.data.id.toString(), repositoryName);

    return NextResponse.json({
        message: "Repository deleted successfully"
    }, { status: 200 });
}