function slugify(title) {
  const words = title.split(" ");
  const slug = words.join("-");
  const lowercaseInput = slug.toLowerCase();
}
