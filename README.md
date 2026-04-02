# Next.js + Inngest Starter Template

<div align="center">

A robust, production-ready starter template for building Next.js applications with reliable background jobs, scheduled tasks, and step functions powered by [Inngest](https://www.inngest.com/).

[![Deploy on Railway](https://railway.com/button.svg)](https://railway.com/deploy/nextjs-with-inngest?referralCode=InkF11&utm_medium=integration&utm_source=template&utm_campaign=generic)

</div>

## Project Structure

- `app/page.tsx`: The main UI featuring the event trigger button with integrated loading, success, and error states.

- `actions/trigger-event.ts`: The Next.js Server Action responsible for securely firing the Inngest event from the server side.

- `inngest/`: Directory containing your Inngest client initialization (`client.ts`) and function definitions (`functions.ts`).

- `app/api/inngest/route.ts`: The API route that serves as the webhook endpoint for Inngest to execute your background functions.

## License

This project is licensed under the MIT License.
