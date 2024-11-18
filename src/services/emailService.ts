interface EmailRequest {
  toMail: string;
  content: string;
}

export const sendEmail = async (data: EmailRequest) => {
  try {
    const response = await fetch('/api/function-1', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjFkYzBmMTcyZThkNmVmMzgyZDZkM2EyMzFmNmMxOTdkZDY4Y2U1ZWYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTE0MTg5NDM0OTA0NTcxODI1Nzg4IiwiaGQiOiJtaW5oYS5mYWcuZWR1LmJyIiwiZW1haWwiOiJwYXNsYXp6YXJpbkBtaW5oYS5mYWcuZWR1LmJyIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiJRcEh4eFZiTVB3MnJ3dU5aN1N3NGxBIiwibmJmIjoxNzMxOTM1ODE2LCJpYXQiOjE3MzE5MzYxMTYsImV4cCI6MTczMTkzOTcxNiwianRpIjoiNTZiNWFkYmY5YjMzYzQzODYzNWUwNDg0YjA2OTY5ZTFkZDVmYzllMiJ9.zFm2QKGbU3AI9hdr0DWF5AxdKGwOsV9BlkPeUzzJhI1tdiLnfVAjDHVVDiP1yPATCTtqqvRvG1Ekc9ES7Vw7j3VtOg8wu8DMv4vUkGto6aMcXQrdDJEiX2pM_TAu1iA7ebcEMQHFnkq4JAYj9KKVy-9zlIqR0oi8WqYHhvLsHJp8l3hO8rgD1Lg9Va2DYZfZm-OKqR19FryRb6cIGl6s38yUSXjRBIeahjH1GA1lrRKsDmxFnIvwvPkCKrpm9HqOaD7mRDL5tUF_zgjKEq7jxVbRfjYBaBCSyToLwplIXqjJWmYlZADcdwqz18NG-98i-ty06Oase5rCnyRKKKfLDg'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.text();
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}

