// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { readFileSync, writeFileSync } from "fs";

export async function GET(request) {
  const content = JSON.parse(
    readFileSync(`${process.cwd()}/src/app/api/getReports/report.json`, "utf8")
  );
  return new Response(JSON.stringify(content), { status: 200});
}

export async function PUT(request) {
  try{
      const content = JSON.parse(
        readFileSync(`${process.cwd()}/src/app/api/getReports/report.json`, "utf8")
      );
      
      const body = await request.json();
      content.push(body);
      writeFileSync(`${process.cwd()}/src/app/api/getReports/report.json`, JSON.stringify(content));
      return new Response("ok", {status:200});
  } catch(err) {
    return new Response(err.message, {status:500});
  }
}