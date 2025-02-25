// pages/api/webhook.ts
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL;
  if (!slackWebhookUrl) {
    return res
      .status(500)
      .json({
        success: false,
        error: 'Slack Webhook URL이 설정되지 않았습니다.',
      });
  }

  try {
    const response = await fetch(slackWebhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: req.body.message }), // 클라이언트에서 받은 메시지 전송
    });

    if (!response.ok) {
      throw new Error(`Slack API Error: ${response.statusText}`);
    }

    return res.status(200).json({ success: true, message: 'Slack 전송 성공!' });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
}
