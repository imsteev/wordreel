Bun.serve({
  fetch() {
    return new Response(Bun.file(import.meta.dir + "/index.html"));
  },
});
