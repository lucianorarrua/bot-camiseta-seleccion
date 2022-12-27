import axios from 'axios';

const CHECK_INTERVAL = 60000;
const WATCH_VARIANTS = ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'];
const STATUS = {
  NOT_AVAILABLE: 'NOT_AVAILABLE',
  IN_STOCK: 'IN_STOCK',
};

function playSuperBeep(time = 0) {
  console.log('\u0007');
  setTimeout(() => {
    if (time < 7) {
      playSuperBeep(time + 1);
    }
  }, 500);
}

function matchVariants(variationList = [], watchVariants = WATCH_VARIANTS) {
  return variationList?.reduce(
    (pv, cv) => pv || !!watchVariants.find((v) => v === cv?.size),
    false
  );
}

function printVariationAvailability(variationList = []) {
  for (let index = 0; index < variationList?.length; index++) {
    const variation = variationList[index];

    if (
      (variation?.availability > 0 ||
        variation?.availability_status !== STATUS?.NOT_AVAILABLE) &&
      WATCH_VARIANTS?.includes(variation?.size)
    ) {
      console.log('✅✅✅ VARIANTE EN STOCK ✅✅✅');
      console.log('⬇️⬇️⬇️⬇️⬇️⬇️');
      console.log(variation);
      console.log('⬆️⬆️⬆️⬆️⬆️⬆️');
      playSuperBeep();
    }
  }
}

async function checkAvailability() {
  try {
    console.log(`fetching... (${new Date().toLocaleString()})`);
    const axiosResponse = await axios.get(
      `https://www.adidas.com.ar/api/products/IB3593/availability`
    );
    const responseData = axiosResponse.data;
    const variationsAvailable = responseData?.variation_list?.filter(
      (variation) => variation?.availability > 0
    );
    if (
      responseData?.availability_status !== STATUS?.NOT_AVAILABLE &&
      matchVariants(variationsAvailable)
    ) {
      console.log('✅✅✅ PRODUCTO EN STOCK ✅✅✅');
      console.log('⬇️⬇️⬇️⬇️⬇️⬇️');
      console.log(
        '🔗 ',
        'https://www.adidas.com.ar/camiseta-titular-argentina-3-estrellas-2022/IB3593.html'
      );
      console.log('⬆️⬆️⬆️⬆️⬆️⬆️');
      printVariationAvailability(responseData?.variation_list);
    }
  } catch (error) {
    console.error('❌❌❌');
    console.error(error);
  }
}

checkAvailability();

setInterval(async () => {
  checkAvailability();
}, CHECK_INTERVAL);
