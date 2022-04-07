<template>
    <div class="container">
        <div class="row detail">
        <!-- 流浪動物照片 -->
        <div class="animalImg col-lg-6">
          <img
            src="https://asms.coa.gov.tw/amlapp/upload/pic/b52f8716-c482-40ff-826b-926312e92d63_org.jpg">
        </div>
        <!-- 資訊 -->
        <div class="animalInfo col-lg-6">
          <h1>傑森</h1>
          <ul>
            <li>種類：狗狗</li>
            <li>品種：拉布拉多</li>
            <li>性別：男性</li>
            <li>位於：新北市</li>
            <li>收容所：劉媽媽動物之家</li>
            <li>收容日期：2022/03/22</li>
          </ul>
        </div>
      </div>
    </div>
</template>

<style scoped>
.detail {
  display: flex;
  justify-content: center;
  margin-top: 5vh;
}
.animalInfo {
  text-align: left;
  margin-top: 1%;
}
.animalImg {
  max-width: 100%;
  max-height: 100%;
}
.animalImg img {
  object-fit: contain;
  max-width: 100%;
  max-height: 90%;
  box-shadow: rgba(5, 5, 5, 5) 0px 4px 12px;
  border-radius: 10px 10px 10px 10px / 10px 10px 10px 10px;
}
li {
  font-size: 2vw;
}
</style>