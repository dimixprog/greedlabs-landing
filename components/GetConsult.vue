<template>
  <div class="consult_form">
    <h2>GET A FREE CONSULTATION</h2>
    <p>
      Получите бесплатную консультацию по нашим продуктам и услугам!
    </p>
    <div class="left_img"></div>
    <form>
      <input type="text" placeholder="Имя"><br>
      <input type="text" placeholder="Связь (Telegram, E-mail, Телефон)"><br>
      <input class="submit_button" type="submit" value="Бесплатная консультация"><br>
    </form>
  </div>
</template>

<style scoped>
  .consult_form form {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    align-self: center;

    /* zoom: 1.524; */

    margin: 30px;
    padding: 30px;
    padding-bottom: 100px;

    

    width: fit-content;
    height: fit-content;
  }

  .left_img{
        -webkit-font-smoothing: antialiased;
    --zoom: 1.587;
    visibility: visible;
    box-sizing: content-box;
    margin: 0;
    padding: 0;
    border: 0;
    display: table-cell;
    vertical-align: middle;
    width: 100%;
    -webkit-text-size-adjust: 100%;
    border-radius: 25px 25px 25px 25px;
    opacity: 0.4;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    border-color: transparent;
    border-style: solid;
    transform: none;
    transform-origin: center center;
    background-image: url("https://optim.tildacdn.com/tild6336-6336-4931-a133-653337376538/-/cover/339x411/center/center/-/format/webp/abce99a6-f01f-4ab1-b.png.webp");
  }

  .consult_form form{
    background-image: url(https://optim.tildacdn.com/tild3666-3163-4639-b132-623461366264/-/format/webp/9e3a6181-04f5-40b9-9.png.webp);
    border-radius: 20px 20px 20px 20px;
    opacity: 0.4;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    border-color: transparent;
    border-style: solid;
    z-index: 3;
  }
  /* form {
    align-items: center;
  } */
  input {
    border-radius: 20px;
    border: 1px solid rgb(22, 134, 244);
    
    background-color: rgb(27, 27, 27);

    color: white;
    font-size: 18px;
    font-weight: 500;

    width: 830px;
    height: 70px;
    margin-bottom: 20px;
    /* margin-left: 10px;
    margin-right: 10px; */
  }
  .submit_button {
    background-color: rgb(21,134,244);
    box-shadow: 0 0 10px rgb(21,134,244);
    cursor: pointer;

    transition: background-color 0.2s ease-in-out,color 0.2s ease-in-out,border-color 0.2s ease-in-out;
  }
  .submit_button:hover {
    box-shadow: 0 0 7px rgb(21,134,244), 0 0 13px rgb(21,134,244), 0 0 18px rgb(21,134,244), 0 0 50px rgb(21,134,244);
  }
</style>