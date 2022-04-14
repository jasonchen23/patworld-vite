<template>
    <a href='{{link}}' class="button-30 mt-3" role="button">{{text}}</a>
</template>

<script>
export default {

}
</script>

<style>
.button-30 {
    align-items: center;
    appearance: none;
    background-color: #FCFCFD;
    border-radius: 4px;
    border-width: 0;
    box-shadow: #ffc107ff 0 1px 3px,#ffc107ff  0 0px 3px -3px,#D6D6E7 0 -3px 0 inset;
    box-sizing: border-box;
    color: #802300;
    font-family: jf-openhuninn;
    cursor: pointer;
    display: inline-flex;
    font-family: "JetBrains Mono",monospace;
    height: 48px;
    justify-content: center;
    line-height: 1;
    list-style: none;
    overflow: hidden;
    padding-left: 16px;
    padding-right: 16px;
    position: relative;
    text-align: left;
    text-decoration: none;
    transition: box-shadow .15s,transform .15s;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    white-space: nowrap;
    will-change: box-shadow,transform;
    font-size: 18px;
    }

    .button-30:focus {
      box-shadow: #D6D6E7 0 0 0 1.5px inset, #ffc107ff 0 2px 4px, #ffc107ff 0 3px 3px -3px, #D6D6E7 0 -3px 0 inset;
    }

    .button-30:hover {
      box-shadow: #ffc107ff 0 2px 3px, #ffc107ff 0 0px 3px -3px, #D6D6E7 0 -3px 0 inset;
      transform: translateY(-2px);
    }

    .button-30:active {
      box-shadow: #D6D6E7 0 3px 7px inset;
      transform: translateY(2px);
    }
</style>