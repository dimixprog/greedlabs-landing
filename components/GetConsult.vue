<template>
  <div class="consult_form">
    <h2>GET A FREE CONSULTATION</h2>
    <p>
      Получите бесплатную консультацию по нашим продуктам и услугам!
    </p>
    <form>
      <input type="text" placeholder="Имя"><br>
      <input type="text" placeholder="Связь (Telegram, E-mail, Телефон)"><br>
      <input class="submit_button" type="submit" value="Бесплатная консультация"><br>
    </form>
  </div>
</template>

<style scoped>
  .consult_form {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    align-self: center;

    /* zoom: 1.524; */

    margin: 30px;
    padding: 30px;
    padding-bottom: 100px;

    background-image: url(https://optim.tildacdn.com/tild3666-3163-4639-b132-623461366264/-/format/webp/9e3a6181-04f5-40b9-9.png.webp);
    background-size: cover;
    background-repeat: no-repeat;

    width: fit-content;
    height: fit-content;
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