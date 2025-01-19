import { Client } from '@notionhq/client';
import { GetDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';
import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useState } from 'react';

const notion = new Client({ auth: import.meta.env.VITE_NOTION_API_KEY });

export const Route = createFileRoute('/test')({
  component: RouteComponent,
  loader: () => async () => {
    const databaseId = '17efaa279a60806fbb91d3d026ca15f6';
    const response = await notion.databases.retrieve({ database_id: databaseId });
    return response;
  },
});

function RouteComponent() {
  const [data, setData] = useState<Promise<GetDatabaseResponse>>(
    {} as Promise<GetDatabaseResponse>,
  );
  const results = Route.useLoaderData();
  useEffect(() => {
    const fetchData = async () => {
      const data = await results();
      return data;
    };
    setData(fetchData());
  }, [results]);

  return (
    <div>
      <h1>Test</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
