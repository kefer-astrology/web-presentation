<script>
  import { base } from "$app/paths";
  /** 
   * @type {{ description: string, image: string }[]} 
   */
  export let carouselItems = [];
  let currentIndex = 0;

  function nextSlide() {
    currentIndex = (currentIndex + 1) % carouselItems.length;
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  }

  function getRandomPosition() {
    const positions = ['top: 10%', 'top: 50%', 'top: 80%', 'left: 10%', 'left: 50%', 'left: 80%'];
    return `${positions[Math.floor(Math.random() * positions.length)]};`;
  }
  </script>
  
  <div class="carousel">
    {#if carouselItems.length > 0}
      <img src="{base}{carouselItems[currentIndex].image}" alt="Carousel item" />
      <div class="carousel-text" style={getRandomPosition()}>{carouselItems[currentIndex].description}</div>
    {/if}
    <div class="carousel-buttons">
      <button on:click={prevSlide}>&#10094;</button>
      <button on:click={nextSlide}>&#10095;</button>
    </div>
  </div>
  
  <style>
    /* Overall container for centering */
    .carousel {
      position: relative;
      max-width: 1200px;
      margin: auto;
      overflow: hidden;
    }
    .carousel img {
      width: 100%;
      display: block;
    }
    .carousel-text {
      position: absolute;
      background: rgba(0, 0, 0, 0.6);
      color: white;
      padding: 10px;
      border-radius: 5px;
      max-width: 400px;
    }
    .carousel-buttons {
      position: absolute;
      top: 50%;
      width: 100%;
      display: flex;
      justify-content: space-between;
      transform: translateY(-50%);
    }
    .carousel-buttons button {
      background: rgba(0, 0, 0, 0.5);
      color: white;
      border: none;
      padding: 10px;
      cursor: pointer;
    }
  </style>
  