interface EmailRequest {
    fromEmail: string;
    fromMessage: string;
  }
  
  export const sendEmail = async (data: EmailRequest) => {
    try {
      const response = await fetch('/api/function-1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjFkYzBmMTcyZThkNmVmMzgyZDZkM2EyMzFmNmMxOTdkZDY4Y2U1ZWYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTE0MTg5NDM0OTA0NTcxODI1Nzg4IiwiaGQiOiJtaW5oYS5mYWcuZWR1LmJyIiwiZW1haWwiOiJwYXNsYXp6YXJpbkBtaW5oYS5mYWcuZWR1LmJyIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiJ6VXlET2tESGR2RF9QbzlYX0VfT0RnIiwibmJmIjoxNzMxOTMxMDg0LCJpYXQiOjE3MzE5MzEzODQsImV4cCI6MTczMTkzNDk4NCwianRpIjoiMWUyYWEyZDRiZTExMTNkNzYyNWExNzQ1MThlN2MyMjQ0ODQ0NzAzYSJ9.JHom3RdVccUPgNeVlLn2p3ZAjzeBh0hatgdtFFtXJHwBPjfgrej2Da7xMGeR9LSHYmrB05mgd2OuvNNNZUpGAihzwDzXz0OI4rww-kZJRG3E1_o_cd37trJwVxkONUiwfZHGyUbcHj0wbN8DPO1JlpA-cLJXx08AdRV8eVR2A4EXTk6nhSc-xHOtxCKeGnVqTXcC9WhUPPLfxa-PZW0iOZ8P3QF2ajLqNLc1KxxqIRW1kLrbI33-2US488Ijli0W8LSQPLosHXmVv3s3TtiUJbO5tqvOsLx6bm7hsVXoXqsghr_tRHC_G3H8mYF9BaT3xZTACat9hSL4DTP4pWF3Fg`, // Substitua com sua chave do SendGrid
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
  };
  