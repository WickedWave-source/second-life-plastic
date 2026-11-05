# Second Life Plastic — ISPP CAS Project

Website for Yannis and Ian's Creativity + Service CAS Project on reusing plastic waste.
Live at **https://wickedwave-source.github.io/second-life-plastic/**

## Adding a photo (no code needed)

Every dashed box on the site shows an ID and a file name, for example `Save as: images/5-3.jpg`.

1. Rename your photo to exactly that name (lowercase `.jpg`, or `.mp4` for the video, `.png` for 6-1).
2. On GitHub, open the `images` folder → **Add file → Upload files** → drop the photo in → **Commit changes**.
3. Wait about a minute and refresh the site. The photo replaces the box automatically.

Tip: resize photos to about 1600 px wide before uploading so pages load fast on phones.

## Replacing the yellow text

Anything highlighted in yellow is a placeholder. Open the page's `.html` file on GitHub, click the pencil icon,
find the text, replace the whole `<mark class="todo">…</mark>` with your words, and commit.

## Connecting the Google Forms

Open `js/main.js` and paste each form's embed link between the quotes at the top:

```js
const FORMS = {
  share: "https://docs.google.com/forms/d/e/XXXX/viewform?embedded=true",
  pledge: "",
  feedback: ""
};
```

Get the link in Google Forms: **Send → `< >` (embed) → copy the `src="…"` URL only.**
Make sure each form is not restricted to ISPP accounts if outside visitors should fill it in.

## Pages

| File | Page | CAS stage |
| --- | --- | --- |
| `index.html` | Home | Demonstration |
| `story.html` | Our Story | Investigation |
| `research.html` | Our Research | Investigation |
| `trial-and-error.html` | Trial & Error | Action + Reflection |
| `guides.html` | DIY Guides | Demonstration |
| `your-turn.html` | Your Turn | Demonstration |
| `about.html` | About & CAS | Preparation |
