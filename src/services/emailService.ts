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
        'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjFkYzBmMTcyZThkNmVmMzgyZDZkM2EyMzFmNmMxOTdkZDY4Y2U1ZWYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTE0MTg5NDM0OTA0NTcxODI1Nzg4IiwiaGQiOiJtaW5oYS5mYWcuZWR1LmJyIiwiZW1haWwiOiJwYXNsYXp6YXJpbkBtaW5oYS5mYWcuZWR1LmJyIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiI2ZXlhSUwxV01hQWtiZmoxdXlEeDJnIiwibmJmIjoxNzMxOTYzNTg1LCJpYXQiOjE3MzE5NjM4ODUsImV4cCI6MTczMTk2NzQ4NSwianRpIjoiNjM3YTRjM2JlNjE0ZjA1YzRlZWI2MmNkYWU4ODI4MTBiYjYwNjViMyJ9.2cp8sWTo-mre6Xs_gVnBvqDn6wr6azpLS6ZQ89mijNo3NpaVAWK45KaTV-T6JyUnlTmpI8SkI_hHnnIx72kRaBGlD2U9oOE0CPmPMPMBedyiejwdnW2Si_7-vV-lU-sSE5IFFb67R6qVsBqHIM8ALhbx27kFmaq9EW4GGEQ4OrEUnWR2AZZQhi1Qgj6_9vliyo8FjHFUClN1O9fuVH9-ndTDqXi1EG1tfeY-rnxFGG1H3MYOW7ZXX0nk68SA8Al0bTlmDlvrptRTsVkUyopGAOiGLuvuiVi-ieAcb3NZHyywomySWAV-xgNkvkzSlD4ULXRr9ee8R9CQiB2b-4A_IQ'
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

