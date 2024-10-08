import { Client } from "@notionhq/client";

export const notionInstance = {
  client: new Client({
    auth: process.env.NOTION_API_KEY,
  }),
  resourcesDatabaseId: process.env.NOTION_RESOURCES_DATABASE_KEY,
};

export async function getCurrentlyReading(notionInstance) {
  const { client, resourcesDatabaseId } = notionInstance;

  const resources = await client.databases.query({
    database_id: resourcesDatabaseId,
    filter: { property: "Status", status: { equals: "In progress" } },
    sorts: [{ property: "Progress", direction: "descending" }],
  });

  return mapResources(resources);
}

function mapResources(resources) {
  return resources.results.map((resource) => ({
    id: resource.id,
    olid: resource.properties.OLID?.rich_text[0]?.plain_text ?? null,
    title: resource.properties.Name.title[0].plain_text,
    progress: resource.properties.Progress.formula.number,
  }));
}
