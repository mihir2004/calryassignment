export function optimizeBookings(bookings) {
  if (bookings.length === 0) return [];

  bookings.sort((a, b) => a[0] - b[0]);

  const mergedBookings = [bookings[0]];
  for (let i = 1; i < bookings.length; i++) {
    const lastMerged = mergedBookings[mergedBookings.length - 1];
    const currentBooking = bookings[i];

    if (currentBooking[0] <= lastMerged[1]) {
      lastMerged[1] = Math.max(lastMerged[1], currentBooking[1]);
    } else {
      mergedBookings.push(currentBooking);
    }
  }
  return mergedBookings;
}

const testBookings = [
  [9, 12],
  [11, 13],
  [14, 17],
  [16, 18],
];
console.log("Optimized Bookings:", optimizeBookings(testBookings));
