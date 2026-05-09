<template>
  <div id="partnerships" class="partnerships-section margin-container">
    <h2 class="colorized-text text-center mb-12">{{ $t('partnerships.title') }}</h2>
    
    <div class="partnerships-grid">
      <div 
        v-for="partner in partners" 
        :key="partner.name"
        class="partner-logo-container"
      >
        <a :href="partner.url" target="_blank" rel="noopener noreferrer">
          <img 
            :src="partner.logo" 
            :alt="partner.name"
            class="partner-logo"
            loading="lazy"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
const partners = [
  {
    name: 'AlphaMind',
    logo: '/partners/alphamind.svg',
    url: 'https://x.com/Alphamind_labs/status/1963209237951111601' // Placeholder URL
  },
  {
    name: 'Astrena',
    logo: '/partners/astrena.svg',
    url: 'https://astrena.ai' // Placeholder URL
  },
  {
    name: 'CWare',
    logo: '/partners/cware.svg',
    url: 'https://cwarelabs.com' // Placeholder URL
  },
  {
    name: 'DRFT',
    logo: '/partners/drft.png',
    url: 'https://x.com/Drft_Party/status/1955616321879605293' // Placeholder URL
  },
  {
    name: 'Gagarin',
    logo: '/partners/gagarin.svg',
    url: 'https://x.com/GAGARIN_World/status/1948388692206174235' // Placeholder URL
  },
  {
    name: 'KuCoin',
    logo: '/partners/kucoin.svg',
    url: 'https://kucoin.com' // Placeholder URL
  }
]
</script>

<style scoped>
#partnerships h2 {
  font-size: 50px; /* Fixed max */
  font-weight: 700;
  text-align: center;
}

.partnerships-section {
  padding: 80px 0;
}

.partnerships-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  align-items: center;
  justify-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.partner-logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.02);
  transition: all 0.3s ease;
  min-height: 120px;
  width: 100%;
}

.partner-logo-container:hover {
  background: rgba(255, 255, 255, 0.05);
  transform: translateY(-5px);
}

.partner-logo {
  max-width: 140px;
  max-height: 80px;
  width: auto;
  height: auto;
  object-fit: contain;
  filter: grayscale(1) opacity(0.5);
  transition: filter 0.3s ease;
}

.partner-logo-container:hover .partner-logo {
  filter: grayscale(0) opacity(1);
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .partnerships-section {
    padding: 60px 0;
  }
  
  .partnerships-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  
  .partner-logo-container {
    padding: 15px;
    min-height: 100px;
  }
  
  .partner-logo {
    max-width: 160px;
    max-height: 80px;
    width: 100%;
  }
}

@media (max-width: 480px) {
  .partnerships-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  
  .partner-logo-container {
    padding: 12px;
    min-height: 80px;
  }
  
  .partner-logo {
    max-width: 200px;
    max-height: 70px;
    width: 100%;
  }
}

@media (min-width: 1200px) {
  .partnerships-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>