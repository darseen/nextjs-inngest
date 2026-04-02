"use server";

import { inngest } from "@/inngest/client";

export default async function triggerEvent() {
  await inngest.send({
    name: "app/task.created",
    data: { id: "task_001" },
  });
}
