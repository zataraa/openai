export function bookToSlug(book: string) {
  return book
    .toLowerCase()
    .normalize('NFD')
    .replace(/[^a-z0-9]/g, '');
}
