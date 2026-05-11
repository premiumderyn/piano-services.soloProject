export async function submitBookingForm(formData: {
  name: string;
  phone: string;
  email: string;
  service: string;
}) {
  // Змінюємо URL на /api/bookings
  const response = await fetch('/api/bookings', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error('Failed to submit booking');
  }

  return response.json();
}