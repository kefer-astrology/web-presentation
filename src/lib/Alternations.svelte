<script>
  import { base } from "$app/paths";
  /** 
   * @type {{ heading: string, description: string, image: string }[]} 
   */
  export let aboutItems = [];
  </script>
  
  <div class="container">
    {#each aboutItems as item, index}
      <div
        class={`widget ${index % 2 === 0 ? 'layout-left' : 'layout-right'} ${
          index % 2 === 1 ? 'background' : ''
        }`}
      >
        <h2 class={`heading ${index % 2 === 0 ? 'dark' : 'light'}`}>{item.heading}</h2>
        <div class="content">
          <div class="image">
            <img src="{base}{item.image}" alt={item.heading} />
          </div>
          <div class={`description ${index % 2 === 0 ? 'dark' : 'light'}`}>
            <p>{item.description}</p>
          </div>
        </div>
      </div>
      
    {/each}
  </div>
  
  <style>
     /* Overall container for centering */
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4rem; /* Add spacing between widgets */
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .widget {
      width: 100%;
      max-width: 900px;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 2rem;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: transform 0.2s;
    }

    /* Add hover effect for interactivity */
    .widget:hover {
      transform: translateY(-5px);
    }

    /* Background color for alternate widgets */
    .background {
      background-color: #1e3a8a; /* Blue background */
    }

    /* Heading styles */
    .heading {
      text-align: center;
      margin-bottom: 1.5rem;
      font-size: 1.8rem;
    }

    .heading.dark {
      color: black;
    }

    .heading.light {
      color: white;
    }

    /* Layouts */
    .content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      gap: 1.5rem;
    }

    .layout-left .image {
      order: 1;
    }

    .layout-left .description {
      order: 2;
    }

    .layout-right .image {
      order: 2;
    }

    .layout-right .description {
      order: 1;
    }

    /* Text description styles */
    .description {
      flex: 1;
      padding: 1rem;
      border-radius: 8px;
      font-size: 1rem;
      line-height: 1.5;
    }

    .description.dark {
      background-color: white;
      color: black;
    }

    .description.light {
      background-color: transparent;
      color: white;
    }

    /* Image styles */
    .image img {
      width: 250px;
      height: auto;
      object-fit: cover;
      border-radius: 8px;
    }
    .divider {
		width: 100px;
		height: 3px;
		margin: 1.5rem auto;
		background: white;
	}
  </style>
  