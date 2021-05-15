<template>
  <div class="restaurant-address">
    <address>
      Ristorante Da Michele<br>
      Sinzheimer Str. 4<br>
      76532 Baden-Baden
    </address>
    <p>
      <a
        href="tel:+49722161541"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          role="img"
          viewBox="0 0 24 24"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
        </svg>
        <span>+49 - (0)7221 - 61541</span>
      </a>
    </p>
    <p>
      <a
        href="mailto:info@da-michele.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          role="img"
          viewBox="0 0 24 24"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
        </svg>
        <span>info@da-michele.com</span>
      </a>
    </p>
    <p>
      <a
        :href="$withBase($localePath + 'vcards/Da_Michele_Baden-Baden.vcf')"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          role="img"
          viewBox="0 0 24 24"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2,3H22C23.05,3 24,3.95 24,5V19C24,20.05 23.05,21 22,21H2C0.95,21 0,20.05 0,19V5C0,3.95 0.95,3 2,3M14,6V7H22V6H14M14,8V9H21.5L22,9V8H14M14,10V11H21V10H14M8,13.91C6,13.91 2,15 2,17V18H14V17C14,15 10,13.91 8,13.91M8,6A3,3 0 0,0 5,9A3,3 0 0,0 8,12A3,3 0 0,0 11,9A3,3 0 0,0 8,6Z" />
        </svg>
        <span v-if="$lang == 'en-US'">Download vCard</span>
        <span v-else>Visitenkarte herunterladen</span>
      </a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'RestaurantAddress'
}
</script>

<style lang="stylus">
.restaurant-address
  padding 0.5em
  margin 1em 0 !important

  p
    a
      background-color var(--blockquoteBorderColor)
      border-radius 4px
      color var(--textColor)
      display inline-block
      font-size 1.2rem
      padding .4rem .8rem
      box-sizing border-box

      svg
        fill var(--textColor)
        max-width 100%
</style>
