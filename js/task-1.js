function slugify(title) {
  const words = title.split(" ");
  const slug = words.join("-");
  const lowercaseSlug = slug.toLowerCase();
  return lowercaseSlug;
}
