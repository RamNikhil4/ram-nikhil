# Ram Nikhil Teja - Portfolio

A futuristic, cyberpunk-themed portfolio website built with modern web technologies.

![Cyberpunk Avatar](avatar_cyberpunk.png)

## Tech Stack

- **HTML5**: Semantic structure.
- **Tailwind CSS v4**: Utility-first CSS framework (via CDN) for rapid styling.
- **JavaScript (Vanilla)**: Interactive elements, typing animations, and scroll behaviors.
- **Lucide Icons**: Beautiful open-source icons.
- **Swiper.js**: Touch-enabled mobile-friendly slider for project showcase.

## Getting Started

### Prerequisites

You need a modern web browser to view the site. To run it locally, a simple HTTP server is recommended to avoid CORS issues with certain assets or functionalities (like local font loading or module scripts if used).

### Local Development

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/portfolio.git
    cd portfolio
    ```

2.  **Start a local server:**
    You can use Python's built-in server or any other static file server.

    **Using Python 3:**

    ```bash
    python3 -m http.server
    ```

    **Using Node.js (http-server):**

    ```bash
    npx http-server .
    ```

3.  **Open in Browser:**
    Navigate to `http://localhost:8000` (or the port shown in your terminal).

## Customization

- **Avatar**: The avatar image is located at `avatar_cyberpunk.png`. You can replace this file with your own image.
- **Content**: Edit `index.html` to update your bio, projects, and contact information.
- **Styles**: Custom styles and animations are in `style.css` and the `<style>` block in `index.html`.

## Deployment

This is a static website, so it can be deployed easily to any static hosting service.

### Vercel (Recommended)

1.  Install Vercel CLI: `npm i -g vercel`
2.  Run `vercel` in the project directory.
3.  Follow the prompts to deploy.

### Netlify

1.  Drag and drop the `portfolio` folder into the Netlify dashboard "Sites" area.

### GitHub Pages

1.  Go to your repository settings on GitHub.
2.  Navigate to "Pages".
3.  Select the `main` branch as the source and save.
