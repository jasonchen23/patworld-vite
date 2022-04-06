<template>
    <div class="body">
        <Navbar />

        <div class="container body">
            <!-- 幻燈片區 -->
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="0"
                        class="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                </div>
                <div class="carousel-inner slideshow">
                    <div class="carousel-item active">
                        <img src="./vuesImages/幻燈片cat.jpeg" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="./vuesImages/幻燈片dog.jpeg" class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev"
                >
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next"
                >
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <!-- 搜尋區 -->
            <div class="search">
                <form action>
                    <div>
                        <h1 class="iWantToSearch">我想要找：</h1>
                        <!-- <input
                            type="image"
                            src="./vuesImages/我想找貓.svg"
                            alt="cat"
                            width="30px"
                            height="30px"
                        />
                        <input
                            type="image"
                            src="./vuesImages/我想找狗.svg"
                            alt="dog"
                            width="30px"
                            height="30px"
                        />-->
                    </div>
                    <div class="selectBox">
                        <div class="select">
                            <select>
                                <option value="1">不限區域</option>
                                <option value="2">北部</option>
                                <option value="3">中部</option>
                                <option value="4">南部</option>
                                <option value="5">東部</option>
                            </select>
                        </div>
                        <div class="select">
                            <select>
                                <option value="1">不限性別</option>
                                <option value="2">男生</option>
                                <option value="3">女生</option>
                            </select>
                        </div>
                        <div class="select">
                            <select>
                                <option value="1">不限種類</option>
                                <option value="2">貓貓</option>
                                <option value="3">狗狗</option>
                            </select>
                        </div>
                        <input type="button" value="搜尋" class="button" />
                    </div>
                </form>
                <!-- <Card v-bind = animalData /> -->
            </div>
            <!-- 卡片區 -->
            <!-- <div class="infomation">
                <img src="./vuesImages/jason.svg" alt="">
                <div class="infoLogo">
                    <img src="./vuesImages/id.svg" alt=""><br>
                    <img src="./vuesImages/gender.svg" alt=""><br>
                    <img src="./vuesImages/狗掌.svg" alt=""><br>
                    <img src="./vuesImages/home.svg" alt="">
                </div>
            </div>-->

            <!-- <div class="card mb-3 mt-3" style="max-width: 35vw;">
                <div class="row">
                    <div class="col-4">
                        <img src="./vuesImages/jason.svg" alt="...">
                    </div>
                    <div class="col-8">
                        <div class="card-body">
                            <h5 class="card-title">傑森</h5>
                            <p class="card-text">
                                <img src="./vuesImages/id.svg" alt=""> 
                            </p>
                            <p class="card-text">
                                <img src="./vuesImages/gender.svg" alt="">
                            </p>
                            <p class="card-text">
                                <img src="./vuesImages/狗掌.svg" alt="" > 
                            </p>
                            <p>
                                <img src="./vuesImages/home.svg" alt="">
                            </p>
                        </div>
                    </div>
                </div>
            </div>-->
        </div>
        <template v-for="animalData in animalData" :key="animalData" class="row">
            <Card v-bind="animalData" class="typesetting" />
        </template>
  <Paginate
    v-model="page"
    :page-count="pageCount"
    :page-range="5"
    :margin-pages="2"
    :prev-text="'上一頁'"
    :next-text="'下一頁'"
    :container-class="'pagination'"
    :page-class="'page-item'"
    :click-handler="clickCallback"
    >
  </Paginate>       
    </div>
</template>

<script>
import Navbar from '@/components/NavbarBox.vue'
import Card from '@/components/Adopt/AnimalCard.vue'
import Paginate from "vuejs-paginate-next"
// import axios from 'axios'

export default {
    components: {
        Navbar,
        Card,
        Paginate,
    },
    data() {
        return {
            page: 1,
            pageCount: 0,
            dataCountPerPage: 9,
            animalData: [{
                "animal_id": 248135,
                "animal_subid": "LAABG111020706",
                "animal_area_pkid": 17,
                "animal_shelter_pkid": 76,
                "animal_place": "高雄市燕巢動物保護關愛園區",
                "animal_kind": "狗",
                "animal_sex": "F",
                "animal_bodytype": "MEDIUM",
                "animal_colour": "黑色",
                "animal_age": "",
                "animal_sterilization": "F",
                "animal_bacterin": "F",
                "animal_foundplace": "維新路",
                "animal_title": "",
                "animal_status": "OPEN",
                "animal_remark": "",
                "animal_caption": "",
                "animal_opendate": "2022-03-03",
                "animal_closeddate": "2999-12-31",
                "animal_update": "2022/03/29",
                "animal_createtime": "2022/03/03",
                "shelter_name": "高雄市燕巢動物保護關愛園區",
                "album_file": "https://asms.coa.gov.tw/amlapp/upload/pic/60c82e2e-0051-4c9b-beea-d091e6ec3652_org.JPG",
                "album_update": "",
                "cDate": "2022/03/29",
                "shelter_address": "高雄市燕巢區師大路98號",
                "shelter_tel": "07-6051002",
                "animal_Variety": "混種狗"
            },
            {
                "animal_id": 248510,
                "animal_subid": "RAAAG1110329003",
                "animal_area_pkid": 8,
                "animal_shelter_pkid": 62,
                "animal_place": "新竹市動物保護教育園區",
                "animal_kind": "狗",
                "animal_sex": "F",
                "animal_bodytype": "MEDIUM",
                "animal_colour": "黃色",
                "animal_age": "",
                "animal_sterilization": "T",
                "animal_bacterin": "F",
                "animal_foundplace": "延平路三段",
                "animal_title": "",
                "animal_status": "OPEN",
                "animal_remark": "",
                "animal_caption": "",
                "animal_opendate": "2022-04-05",
                "animal_closeddate": "2999-12-31",
                "animal_update": "2022/03/29",
                "animal_createtime": "2022/03/29",
                "shelter_name": "新竹市動物保護教育園區",
                "album_file": "https://asms.coa.gov.tw/amlapp/upload/pic/ba9eb8d1-7716-4833-9742-3b922be9f883_org.jpg",
                "album_update": "",
                "cDate": "2022/03/29",
                "shelter_address": "新竹市南寮里海濱路250號",
                "shelter_tel": "03-5368329",
                "animal_Variety": "高山犬"
            },
            {
                "animal_id": 248575,
                "animal_subid": "LAAAG1110329C4",
                "animal_area_pkid": 17,
                "animal_shelter_pkid": 75,
                "animal_place": "高雄市壽山動物保護教育園區",
                "animal_kind": "貓",
                "animal_sex": "F",
                "animal_bodytype": "BIG",
                "animal_colour": "虎斑色",
                "animal_age": "",
                "animal_sterilization": "F",
                "animal_bacterin": "F",
                "animal_foundplace": "鼎立路",
                "animal_title": "",
                "animal_status": "OPEN",
                "animal_remark": "※協尋飼主 暫不開放",
                "animal_caption": "",
                "animal_opendate": "",
                "animal_closeddate": "2999-12-31",
                "animal_update": "2022/03/29",
                "animal_createtime": "2022/03/29",
                "shelter_name": "高雄市壽山動物保護教育園區",
                "album_file": "https://asms.coa.gov.tw/amlapp/upload/pic/083d0b8e-b6cb-44f8-9ec6-bb5a46650df1_org.JPG",
                "album_update": "",
                "cDate": "2022/03/29",
                "shelter_address": "高雄市鼓山區萬壽路350號",
                "shelter_tel": "07-5519059",
                "animal_Variety": "混種貓"
            },
            {
                "animal_id": 248511,
                "animal_subid": "RAAAG1110329004",
                "animal_area_pkid": 8,
                "animal_shelter_pkid": 62,
                "animal_place": "新竹市動物保護教育園區",
                "animal_kind": "狗",
                "animal_sex": "M",
                "animal_bodytype": "MEDIUM",
                "animal_colour": "黑色",
                "animal_age": "",
                "animal_sterilization": "T",
                "animal_bacterin": "F",
                "animal_foundplace": "延平路三段",
                "animal_title": "",
                "animal_status": "OPEN",
                "animal_remark": "",
                "animal_caption": "",
                "animal_opendate": "2022-04-05",
                "animal_closeddate": "2999-12-31",
                "animal_update": "2022/03/29",
                "animal_createtime": "2022/03/29",
                "shelter_name": "新竹市動物保護教育園區",
                "album_file": "https://asms.coa.gov.tw/amlapp/upload/pic/5c818a51-e8c3-44d8-8ffb-ba0b497be07b_org.jpg",
                "album_update": "",
                "cDate": "2022/03/29",
                "shelter_address": "新竹市南寮里海濱路250號",
                "shelter_tel": "03-5368329",
                "animal_Variety": "混種狗"
            },
            {
                "animal_id": 245038,
                "animal_subid": "111030603",
                "animal_area_pkid": 2,
                "animal_shelter_pkid": 49,
                "animal_place": "臺北市動物之家",
                "animal_kind": "貓",
                "animal_sex": "F",
                "animal_bodytype": "MEDIUM",
                "animal_colour": "黑色",
                "animal_age": "",
                "animal_sterilization": "F",
                "animal_bacterin": "F",
                "animal_foundplace": "研究院路一段(原救援地址：雙連街)",
                "animal_title": "",
                "animal_status": "OPEN",
                "animal_remark": "急傷回(骨盆骨折、右後肢反應差、體外驅蟲)，右剪耳，111/3/15 開放認養",
                "animal_caption": "",
                "animal_opendate": "2022-03-15",
                "animal_closeddate": "2999-12-31",
                "animal_update": "2022/03/29",
                "animal_createtime": "2022/03/06",
                "shelter_name": "臺北市動物之家",
                "album_file": "https://asms.coa.gov.tw/amlapp/upload/pic/75ae7454-fb87-418f-bde9-a27bf06040ea_org.jpg",
                "album_update": "",
                "cDate": "2022/03/29",
                "shelter_address": "臺北市內湖區潭美街852號",
                "shelter_tel": "02-87913254",
                "animal_Variety": "混種貓"
            },
            {
                "animal_id": 248574,
                "animal_subid": "1110498",
                "animal_area_pkid": 5,
                "animal_shelter_pkid": 78,
                "animal_place": "宜蘭縣流浪動物中途之家",
                "animal_kind": "狗",
                "animal_sex": "M",
                "animal_bodytype": "BIG",
                "animal_colour": "棕白色",
                "animal_age": "",
                "animal_sterilization": "F",
                "animal_bacterin": "F",
                "animal_foundplace": "蘇澳東澳路",
                "animal_title": "",
                "animal_status": "OPEN",
                "animal_remark": "",
                "animal_caption": "",
                "animal_opendate": "2022-03-29",
                "animal_closeddate": "2999-12-31",
                "animal_update": "2022/03/29",
                "animal_createtime": "2022/03/29",
                "shelter_name": "宜蘭縣流浪動物中途之家",
                "album_file": "",
                "album_update": "",
                "cDate": "2022/03/29",
                "shelter_address": "宜蘭縣五結鄉成興村利寶路60號",
                "shelter_tel": "039602350分機620",
                "animal_Variety": "比特"
            },
            {
                "animal_id": 247131,
                "animal_subid": "XAAAG1110318001",
                "animal_area_pkid": 23,
                "animal_shelter_pkid": 81,
                "animal_place": "連江縣流浪犬收容中心",
                "animal_kind": "狗",
                "animal_sex": "F",
                "animal_bodytype": "MEDIUM",
                "animal_colour": "白色",
                "animal_age": "",
                "animal_sterilization": "F",
                "animal_bacterin": "F",
                "animal_foundplace": "南竿鄉復興村",
                "animal_title": "",
                "animal_status": "OPEN",
                "animal_remark": "",
                "animal_caption": "",
                "animal_opendate": "2022-03-18",
                "animal_closeddate": "2999-12-31",
                "animal_update": "2022/03/29",
                "animal_createtime": "2022/03/18",
                "shelter_name": "連江縣流浪犬收容中心",
                "album_file": "https://asms.coa.gov.tw/amlapp/upload/pic/4a9a87ed-075c-4227-8225-3857ea8022cd_org.jpg",
                "album_update": "",
                "cDate": "2022/03/29",
                "shelter_address": "連江縣南竿鄉復興村223號",
                "shelter_tel": "0836-25003",
                "animal_Variety": "混種狗"
            },
            {
                "animal_id": 246335,
                "animal_subid": "DAAAG1110314005",
                "animal_area_pkid": 7,
                "animal_shelter_pkid": 63,
                "animal_place": "新竹縣公立動物收容所",
                "animal_kind": "狗",
                "animal_sex": "F",
                "animal_bodytype": "MEDIUM",
                "animal_colour": "黑色",
                "animal_age": "",
                "animal_sterilization": "F",
                "animal_bacterin": "F",
                "animal_foundplace": "竹北",
                "animal_title": "",
                "animal_status": "OPEN",
                "animal_remark": "入所時右耳已剪耳。兩側腋下犬咬撕裂傷(3/28已復原)。可摸可牽",
                "animal_caption": "",
                "animal_opendate": "2022-03-14",
                "animal_closeddate": "2999-12-31",
                "animal_update": "2022/03/29",
                "animal_createtime": "2022/03/14",
                "shelter_name": "新竹縣公立動物收容所",
                "album_file": "https://asms.coa.gov.tw/amlapp/upload/pic/b95a05fe-5fda-4f4a-9ece-7c725f8040a4_org.jpg",
                "album_update": "",
                "cDate": "2022/03/29",
                "shelter_address": "新竹縣竹北市縣政五街192號",
                "shelter_tel": "03-5519548",
                "animal_Variety": "混種狗"
            },
            {
                "animal_id": 247714,
                "animal_subid": "DAAAG1110323001",
                "animal_area_pkid": 7,
                "animal_shelter_pkid": 63,
                "animal_place": "新竹縣公立動物收容所",
                "animal_kind": "狗",
                "animal_sex": "F",
                "animal_bodytype": "MEDIUM",
                "animal_colour": "黑色",
                "animal_age": "",
                "animal_sterilization": "F",
                "animal_bacterin": "F",
                "animal_foundplace": "新豐",
                "animal_title": "",
                "animal_status": "OPEN",
                "animal_remark": "入所時右耳已剪耳。車禍救援，X光可見恥骨骨折，另左前腕部外傷治療中。入所時無法站立，3/28觀察到可短暫站立，後續仍待評估觀察。",
                "animal_caption": "",
                "animal_opendate": "2022-03-23",
                "animal_closeddate": "2999-12-31",
                "animal_update": "2022/03/29",
                "animal_createtime": "2022/03/23",
                "shelter_name": "新竹縣公立動物收容所",
                "album_file": "https://asms.coa.gov.tw/amlapp/upload/pic/656204bc-dba6-4f8a-bec9-41040700a340_org.jpg",
                "album_update": "",
                "cDate": "2022/03/29",
                "shelter_address": "新竹縣竹北市縣政五街192號",
                "shelter_tel": "03-5519548",
                "animal_Variety": "混種狗"
            },
            {
                "animal_id": 247716,
                "animal_subid": "DAAAG1110323002",
                "animal_area_pkid": 7,
                "animal_shelter_pkid": 63,
                "animal_place": "新竹縣公立動物收容所",
                "animal_kind": "狗",
                "animal_sex": "F",
                "animal_bodytype": "MEDIUM",
                "animal_colour": "黃色",
                "animal_age": "ADULT",
                "animal_sterilization": "F",
                "animal_bacterin": "F",
                "animal_foundplace": "湖口",
                "animal_title": "",
                "animal_status": "OPEN",
                "animal_remark": "疑似車禍，X光可見骨盆骨折，入所時精神不佳無法站立，後續仍待評估觀察(3/29精神變好願意進食仍無法站立)",
                "animal_caption": "",
                "animal_opendate": "2022-03-23",
                "animal_closeddate": "2999-12-31",
                "animal_update": "2022/03/29",
                "animal_createtime": "2022/03/23",
                "shelter_name": "新竹縣公立動物收容所",
                "album_file": "https://asms.coa.gov.tw/amlapp/upload/pic/1ce7032a-9290-4826-923f-ce9810693de6_org.jpg",
                "album_update": "",
                "cDate": "2022/03/29",
                "shelter_address": "新竹縣竹北市縣政五街192號",
                "shelter_tel": "03-5519548",
                "animal_Variety": "混種狗"
            },
            {
                "animal_id": 248564,
                "animal_subid": "RAAAG1110329006",
                "animal_area_pkid": 8,
                "animal_shelter_pkid": 62,
                "animal_place": "新竹市動物保護教育園區",
                "animal_kind": "貓",
                "animal_sex": "M",
                "animal_bodytype": "MEDIUM",
                "animal_colour": "白色",
                "animal_age": "",
                "animal_sterilization": "F",
                "animal_bacterin": "F",
                "animal_foundplace": "東光路",
                "animal_title": "",
                "animal_status": "OPEN",
                "animal_remark": "",
                "animal_caption": "",
                "animal_opendate": "",
                "animal_closeddate": "2999-12-31",
                "animal_update": "2022/03/29",
                "animal_createtime": "2022/03/29",
                "shelter_name": "新竹市動物保護教育園區",
                "album_file": "https://asms.coa.gov.tw/amlapp/upload/pic/17dbe034-11a8-4436-bcfd-ef9de6139536_org.JPG",
                "album_update": "",
                "cDate": "2022/03/29",
                "shelter_address": "新竹市南寮里海濱路250號",
                "shelter_tel": "03-5368329",
                "animal_Variety": "混種貓"
            },
            {
                "animal_id": 248563,
                "animal_subid": "GAAAG1110329006",
                "animal_area_pkid": 11,
                "animal_shelter_pkid": 69,
                "animal_place": "彰化縣流浪狗中途之家",
                "animal_kind": "狗",
                "animal_sex": "N",
                "animal_bodytype": "MEDIUM",
                "animal_colour": "黃白色",
                "animal_age": "",
                "animal_sterilization": "F",
                "animal_bacterin": "F",
                "animal_foundplace": "員大路",
                "animal_title": "",
                "animal_status": "OPEN",
                "animal_remark": "111.04.06早上10點開放認養（拾獲者有意願要認養，緊急帶出目前不在所內）",
                "animal_caption": "",
                "animal_opendate": "2022-04-06",
                "animal_closeddate": "2999-12-31",
                "animal_update": "2022/03/29",
                "animal_createtime": "2022/03/29",
                "shelter_name": "彰化縣流浪狗中途之家",
                "album_file": "https://asms.coa.gov.tw/amlapp/upload/pic/228da5e8-44ec-454f-8ffc-4c6b536fcffa_org.jpg",
                "album_update": "",
                "cDate": "2022/03/29",
                "shelter_address": "彰化縣員林市大峰里阿寶巷426號(大門入口請由彰化縣芬園鄉大彰路一段875巷進入走到底)",
                "shelter_tel": "04-8590638",
                "animal_Variety": "柯基"
            },
            {
                "animal_id": 247297,
                "animal_subid": "HAAAG1110321YC2",
                "animal_area_pkid": 12,
                "animal_shelter_pkid": 70,
                "animal_place": "南投縣公立動物收容所",
                "animal_kind": "貓",
                "animal_sex": "F",
                "animal_bodytype": "SMALL",
                "animal_colour": "黑白色",
                "animal_age": "",
                "animal_sterilization": "T",
                "animal_bacterin": "F",
                "animal_foundplace": "南投縣鹿谷鄉仁愛路",
                "animal_title": "",
                "animal_status": "OPEN",
                "animal_remark": "",
                "animal_caption": "",
                "animal_opendate": "2022-03-21",
                "animal_closeddate": "2999-12-31",
                "animal_update": "2022/03/29",
                "animal_createtime": "2022/03/21",
                "shelter_name": "南投縣公立動物收容所",
                "album_file": "https://asms.coa.gov.tw/amlapp/upload/pic/9660138f-ffcc-4811-818f-77848ec017a7_org.JPG",
                "album_update": "",
                "cDate": "2022/03/29",
                "shelter_address": "南投縣南投市嶺興路36-1號",
                "shelter_tel": "049-2225440",
                "animal_Variety": "混種貓"
            },
            {
                "animal_id": 248561,
                "animal_subid": "GAAAG1110329005",
                "animal_area_pkid": 11,
                "animal_shelter_pkid": 69,
                "animal_place": "彰化縣流浪狗中途之家",
                "animal_kind": "狗",
                "animal_sex": "M",
                "animal_bodytype": "MEDIUM",
                "animal_colour": "黑色",
                "animal_age": "",
                "animal_sterilization": "F",
                "animal_bacterin": "F",
                "animal_foundplace": "彰化師大（寶山校區）",
                "animal_title": "",
                "animal_status": "OPEN",
                "animal_remark": "",
                "animal_caption": "",
                "animal_opendate": "2022-03-29",
                "animal_closeddate": "2999-12-31",
                "animal_update": "2022/03/29",
                "animal_createtime": "2022/03/29",
                "shelter_name": "彰化縣流浪狗中途之家",
                "album_file": "https://asms.coa.gov.tw/amlapp/upload/pic/91cccc7c-1c56-4e8a-8602-8f5f89b958f2_org.jpg",
                "album_update": "",
                "cDate": "2022/03/29",
                "shelter_address": "彰化縣員林市大峰里阿寶巷426號(大門入口請由彰化縣芬園鄉大彰路一段875巷進入走到底)",
                "shelter_tel": "04-8590638",
                "animal_Variety": "混種狗"
            },
            {
                "animal_id": 248560,
                "animal_subid": "GAAAG1110329004",
                "animal_area_pkid": 11,
                "animal_shelter_pkid": 69,
                "animal_place": "彰化縣流浪狗中途之家",
                "animal_kind": "狗",
                "animal_sex": "M",
                "animal_bodytype": "MEDIUM",
                "animal_colour": "虎斑色",
                "animal_age": "",
                "animal_sterilization": "F",
                "animal_bacterin": "F",
                "animal_foundplace": "聖安路159號",
                "animal_title": "",
                "animal_status": "OPEN",
                "animal_remark": "",
                "animal_caption": "",
                "animal_opendate": "2022-03-29",
                "animal_closeddate": "2999-12-31",
                "animal_update": "2022/03/29",
                "animal_createtime": "2022/03/29",
                "shelter_name": "彰化縣流浪狗中途之家",
                "album_file": "",
                "album_update": "",
                "cDate": "2022/03/29",
                "shelter_address": "彰化縣員林市大峰里阿寶巷426號(大門入口請由彰化縣芬園鄉大彰路一段875巷進入走到底)",
                "shelter_tel": "04-8590638",
                "animal_Variety": "混種狗"
            },
            {
                "animal_id": 234356,
                "animal_subid": "JAAAG1101208002",
                "animal_area_pkid": 14,
                "animal_shelter_pkid": 72,
                "animal_place": "嘉義縣流浪犬中途之家",
                "animal_kind": "狗",
                "animal_sex": "F",
                "animal_bodytype": "BIG",
                "animal_colour": "黑色",
                "animal_age": "",
                "animal_sterilization": "T",
                "animal_bacterin": "F",
                "animal_foundplace": "水上鄉柳林村",
                "animal_title": "",
                "animal_status": "OPEN",
                "animal_remark": "",
                "animal_caption": "",
                "animal_opendate": "2022-03-29",
                "animal_closeddate": "2999-12-31",
                "animal_update": "2022/03/29",
                "animal_createtime": "2021/12/08",
                "shelter_name": "嘉義縣流浪犬中途之家",
                "album_file": "https://asms.coa.gov.tw/amlapp/upload/pic/968d66a8-fab8-4dba-96fc-86de4823c3ad_org.JPG",
                "album_update": "",
                "cDate": "2022/03/29",
                "shelter_address": "嘉義縣大林鎮中坑里中興2-6號",
                "shelter_tel": "05-2950053",
                "animal_Variety": "混種狗"
            },
            {
                "animal_id": 248559,
                "animal_subid": "GAAAG1110329003",
                "animal_area_pkid": 11,
                "animal_shelter_pkid": 69,
                "animal_place": "彰化縣流浪狗中途之家",
                "animal_kind": "狗",
                "animal_sex": "F",
                "animal_bodytype": "MEDIUM",
                "animal_colour": "虎斑色",
                "animal_age": "",
                "animal_sterilization": "F",
                "animal_bacterin": "F",
                "animal_foundplace": "聖安路159號",
                "animal_title": "",
                "animal_status": "OPEN",
                "animal_remark": "",
                "animal_caption": "",
                "animal_opendate": "2022-03-29",
                "animal_closeddate": "2999-12-31",
                "animal_update": "2022/03/29",
                "animal_createtime": "2022/03/29",
                "shelter_name": "彰化縣流浪狗中途之家",
                "album_file": "",
                "album_update": "",
                "cDate": "2022/03/29",
                "shelter_address": "彰化縣員林市大峰里阿寶巷426號(大門入口請由彰化縣芬園鄉大彰路一段875巷進入走到底)",
                "shelter_tel": "04-8590638",
                "animal_Variety": "混種狗"
            },
            {
                "animal_id": 248552,
                "animal_subid": "AAAFG1110329001",
                "animal_area_pkid": 3,
                "animal_shelter_pkid": 55,
                "animal_place": "新北市淡水區公立動物之家",
                "animal_kind": "貓",
                "animal_sex": "M",
                "animal_bodytype": "SMALL",
                "animal_colour": "虎斑色",
                "animal_age": "",
                "animal_sterilization": "T",
                "animal_bacterin": "F",
                "animal_foundplace": "淡水區樹梅坑（楓丹白露社區）",
                "animal_title": "",
                "animal_status": "OPEN",
                "animal_remark": "管制號：095474，1110310絕育，狂犬病疫苗，四合一疫苗，體內外驅蟲，晶片：992007300082619",
                "animal_caption": "",
                "animal_opendate": "2022-03-29",
                "animal_closeddate": "2999-12-31",
                "animal_update": "2022/03/29",
                "animal_createtime": "2022/03/29",
                "shelter_name": "新北市淡水區公立動物之家",
                "album_file": "",
                "album_update": "",
                "cDate": "2022/03/29",
                "shelter_address": "新北市淡水區下圭柔山91之3號",
                "shelter_tel": "02-26267558",
                "animal_Variety": "混種貓"
            },
            {
                "animal_id": 248536,
                "animal_subid": "EAAAG1110329005",
                "animal_area_pkid": 9,
                "animal_shelter_pkid": 96,
                "animal_place": "苗栗縣生態保育教育中心(動物收容所)",
                "animal_kind": "狗",
                "animal_sex": "F",
                "animal_bodytype": "BIG",
                "animal_colour": "黑色",
                "animal_age": "",
                "animal_sterilization": "F",
                "animal_bacterin": "F",
                "animal_foundplace": "卓",
                "animal_title": "",
                "animal_status": "OPEN",
                "animal_remark": "",
                "animal_caption": "",
                "animal_opendate": "2022-03-29",
                "animal_closeddate": "2999-12-31",
                "animal_update": "2022/03/29",
                "animal_createtime": "2022/03/29",
                "shelter_name": "苗栗縣生態保育教育中心(動物收容所)",
                "album_file": "https://asms.coa.gov.tw/amlapp/upload/pic/62cb64c4-7591-4901-89e3-2194f0799631_org.jpg",
                "album_update": "",
                "cDate": "2022/03/29",
                "shelter_address": "苗栗縣銅鑼鄉朝陽村6鄰朝北55-1號(地圖：https://goo.gl/maps/Bd4sckpEPsrof7Qb8)",
                "shelter_tel": "037-558228",
                "animal_Variety": "混種狗"
            },
            {
                "animal_id": 248547,
                "animal_subid": "EAAAG1110329013",
                "animal_area_pkid": 9,
                "animal_shelter_pkid": 96,
                "animal_place": "苗栗縣生態保育教育中心(動物收容所)",
                "animal_kind": "狗",
                "animal_sex": "F",
                "animal_bodytype": "BIG",
                "animal_colour": "黑色",
                "animal_age": "",
                "animal_sterilization": "F",
                "animal_bacterin": "F",
                "animal_foundplace": "三",
                "animal_title": "",
                "animal_status": "OPEN",
                "animal_remark": "",
                "animal_caption": "",
                "animal_opendate": "2022-03-29",
                "animal_closeddate": "2999-12-31",
                "animal_update": "2022/03/29",
                "animal_createtime": "2022/03/29",
                "shelter_name": "苗栗縣生態保育教育中心(動物收容所)",
                "album_file": "https://asms.coa.gov.tw/amlapp/upload/pic/1778a843-3c22-4e12-bfde-4b63776fe4af_org.jpg",
                "album_update": "",
                "cDate": "2022/03/29",
                "shelter_address": "苗栗縣銅鑼鄉朝陽村6鄰朝北55-1號(地圖：https://goo.gl/maps/Bd4sckpEPsrof7Qb8)",
                "shelter_tel": "037-558228",
                "animal_Variety": "混種狗"
            },
            {
                "animal_id": 248546,
                "animal_subid": "EAAAG1110329012",
                "animal_area_pkid": 9,
                "animal_shelter_pkid": 96,
                "animal_place": "苗栗縣生態保育教育中心(動物收容所)",
                "animal_kind": "狗",
                "animal_sex": "F",
                "animal_bodytype": "BIG",
                "animal_colour": "黑色",
                "animal_age": "",
                "animal_sterilization": "F",
                "animal_bacterin": "F",
                "animal_foundplace": "三",
                "animal_title": "",
                "animal_status": "OPEN",
                "animal_remark": "",
                "animal_caption": "",
                "animal_opendate": "2022-03-29",
                "animal_closeddate": "2999-12-31",
                "animal_update": "2022/03/29",
                "animal_createtime": "2022/03/29",
                "shelter_name": "苗栗縣生態保育教育中心(動物收容所)",
                "album_file": "https://asms.coa.gov.tw/amlapp/upload/pic/1778a843-3c22-4e12-bfde-4b63776fe4af_org.jpg",
                "album_update": "",
                "cDate": "2022/03/29",
                "shelter_address": "苗栗縣銅鑼鄉朝陽村6鄰朝北55-1號(地圖：https://goo.gl/maps/Bd4sckpEPsrof7Qb8)",
                "shelter_tel": "037-558228",
                "animal_Variety": "混種狗"
            },
            {
                "animal_id": 248544,
                "animal_subid": "EAAAG1110329011",
                "animal_area_pkid": 9,
                "animal_shelter_pkid": 96,
                "animal_place": "苗栗縣生態保育教育中心(動物收容所)",
                "animal_kind": "貓",
                "animal_sex": "F",
                "animal_bodytype": "BIG",
                "animal_colour": "虎斑色",
                "animal_age": "",
                "animal_sterilization": "F",
                "animal_bacterin": "F",
                "animal_foundplace": "通宵梅南里",
                "animal_title": "",
                "animal_status": "OPEN",
                "animal_remark": "",
                "animal_caption": "",
                "animal_opendate": "2022-03-29",
                "animal_closeddate": "2999-12-31",
                "animal_update": "2022/03/29",
                "animal_createtime": "2022/03/29",
                "shelter_name": "苗栗縣生態保育教育中心(動物收容所)",
                "album_file": "https://asms.coa.gov.tw/amlapp/upload/pic/cc2a9e7c-9c2f-4f4f-b84d-a29b54e63eaf_org.jpg",
                "album_update": "",
                "cDate": "2022/03/29",
                "shelter_address": "苗栗縣銅鑼鄉朝陽村6鄰朝北55-1號(地圖：https://goo.gl/maps/Bd4sckpEPsrof7Qb8)",
                "shelter_tel": "037-558228",
                "animal_Variety": "混種貓"
            },
            {
                "animal_id": 248542,
                "animal_subid": "EAAAG1110329010",
                "animal_area_pkid": 9,
                "animal_shelter_pkid": 96,
                "animal_place": "苗栗縣生態保育教育中心(動物收容所)",
                "animal_kind": "貓",
                "animal_sex": "F",
                "animal_bodytype": "BIG",
                "animal_colour": "虎斑色",
                "animal_age": "",
                "animal_sterilization": "F",
                "animal_bacterin": "F",
                "animal_foundplace": "通宵梅南里",
                "animal_title": "",
                "animal_status": "OPEN",
                "animal_remark": "",
                "animal_caption": "",
                "animal_opendate": "2022-03-29",
                "animal_closeddate": "2999-12-31",
                "animal_update": "2022/03/29",
                "animal_createtime": "2022/03/29",
                "shelter_name": "苗栗縣生態保育教育中心(動物收容所)",
                "album_file": "https://asms.coa.gov.tw/amlapp/upload/pic/23df496d-92cc-4d0a-9948-0e9f6ff66bc0_org.jpg",
                "album_update": "",
                "cDate": "2022/03/29",
                "shelter_address": "苗栗縣銅鑼鄉朝陽村6鄰朝北55-1號(地圖：https://goo.gl/maps/Bd4sckpEPsrof7Qb8)",
                "shelter_tel": "037-558228",
                "animal_Variety": "混種貓"
            },
            {
                "animal_id": 248541,
                "animal_subid": "EAAAG1110329009",
                "animal_area_pkid": 9,
                "animal_shelter_pkid": 96,
                "animal_place": "苗栗縣生態保育教育中心(動物收容所)",
                "animal_kind": "貓",
                "animal_sex": "F",
                "animal_bodytype": "BIG",
                "animal_colour": "三花色",
                "animal_age": "",
                "animal_sterilization": "F",
                "animal_bacterin": "F",
                "animal_foundplace": "通宵梅南里",
                "animal_title": "",
                "animal_status": "OPEN",
                "animal_remark": "",
                "animal_caption": "",
                "animal_opendate": "2022-03-29",
                "animal_closeddate": "2999-12-31",
                "animal_update": "2022/03/29",
                "animal_createtime": "2022/03/29",
                "shelter_name": "苗栗縣生態保育教育中心(動物收容所)",
                "album_file": "https://asms.coa.gov.tw/amlapp/upload/pic/6e90587c-7359-4a09-a83a-436fe23b4ec9_org.jpg",
                "album_update": "",
                "cDate": "2022/03/29",
                "shelter_address": "苗栗縣銅鑼鄉朝陽村6鄰朝北55-1號(地圖：https://goo.gl/maps/Bd4sckpEPsrof7Qb8)",
                "shelter_tel": "037-558228",
                "animal_Variety": "混種貓"
            },
            {
                "animal_id": 248539,
                "animal_subid": "EAAAG1110329008",
                "animal_area_pkid": 9,
                "animal_shelter_pkid": 96,
                "animal_place": "苗栗縣生態保育教育中心(動物收容所)",
                "animal_kind": "貓",
                "animal_sex": "M",
                "animal_bodytype": "BIG",
                "animal_colour": "白色",
                "animal_age": "",
                "animal_sterilization": "F",
                "animal_bacterin": "F",
                "animal_foundplace": "苗栗市勝利里",
                "animal_title": "",
                "animal_status": "OPEN",
                "animal_remark": "黴菌",
                "animal_caption": "",
                "animal_opendate": "2022-03-29",
                "animal_closeddate": "2999-12-31",
                "animal_update": "2022/03/29",
                "animal_createtime": "2022/03/29",
                "shelter_name": "苗栗縣生態保育教育中心(動物收容所)",
                "album_file": "https://asms.coa.gov.tw/amlapp/upload/pic/079c343b-d9e0-434c-827a-0b2e8ce91759_org.jpg",
                "album_update": "",
                "cDate": "2022/03/29",
                "shelter_address": "苗栗縣銅鑼鄉朝陽村6鄰朝北55-1號(地圖：https://goo.gl/maps/Bd4sckpEPsrof7Qb8)",
                "shelter_tel": "037-558228",
                "animal_Variety": "混種貓"
            },
            {
                "animal_id": 248538,
                "animal_subid": "EAAAG1110329007",
                "animal_area_pkid": 9,
                "animal_shelter_pkid": 96,
                "animal_place": "苗栗縣生態保育教育中心(動物收容所)",
                "animal_kind": "貓",
                "animal_sex": "M",
                "animal_bodytype": "BIG",
                "animal_colour": "虎斑色",
                "animal_age": "",
                "animal_sterilization": "F",
                "animal_bacterin": "F",
                "animal_foundplace": "通宵梅南里",
                "animal_title": "",
                "animal_status": "OPEN",
                "animal_remark": "",
                "animal_caption": "",
                "animal_opendate": "2022-03-29",
                "animal_closeddate": "2999-12-31",
                "animal_update": "2022/03/29",
                "animal_createtime": "2022/03/29",
                "shelter_name": "苗栗縣生態保育教育中心(動物收容所)",
                "album_file": "https://asms.coa.gov.tw/amlapp/upload/pic/57e2d828-2464-4e7d-8272-61a649282aa2_org.jpg",
                "album_update": "",
                "cDate": "2022/03/29",
                "shelter_address": "苗栗縣銅鑼鄉朝陽村6鄰朝北55-1號(地圖：https://goo.gl/maps/Bd4sckpEPsrof7Qb8)",
                "shelter_tel": "037-558228",
                "animal_Variety": "混種貓"
            },
            {
                "animal_id": 248537,
                "animal_subid": "EAAAG1110329006",
                "animal_area_pkid": 9,
                "animal_shelter_pkid": 96,
                "animal_place": "苗栗縣生態保育教育中心(動物收容所)",
                "animal_kind": "貓",
                "animal_sex": "M",
                "animal_bodytype": "BIG",
                "animal_colour": "虎斑色",
                "animal_age": "",
                "animal_sterilization": "F",
                "animal_bacterin": "F",
                "animal_foundplace": "通宵梅南里",
                "animal_title": "",
                "animal_status": "OPEN",
                "animal_remark": "",
                "animal_caption": "",
                "animal_opendate": "2022-03-29",
                "animal_closeddate": "2999-12-31",
                "animal_update": "2022/03/29",
                "animal_createtime": "2022/03/29",
                "shelter_name": "苗栗縣生態保育教育中心(動物收容所)",
                "album_file": "https://asms.coa.gov.tw/amlapp/upload/pic/e959200e-049f-4dac-aece-8fdefc8ba34c_org.jpg",
                "album_update": "",
                "cDate": "2022/03/29",
                "shelter_address": "苗栗縣銅鑼鄉朝陽村6鄰朝北55-1號(地圖：https://goo.gl/maps/Bd4sckpEPsrof7Qb8)",
                "shelter_tel": "037-558228",
                "animal_Variety": "混種貓"
            },
            {
                "animal_id": 248535,
                "animal_subid": "EAAAG1110329004",
                "animal_area_pkid": 9,
                "animal_shelter_pkid": 96,
                "animal_place": "苗栗縣生態保育教育中心(動物收容所)",
                "animal_kind": "貓",
                "animal_sex": "M",
                "animal_bodytype": "BIG",
                "animal_colour": "黃白色",
                "animal_age": "",
                "animal_sterilization": "F",
                "animal_bacterin": "F",
                "animal_foundplace": "通宵梅南里",
                "animal_title": "",
                "animal_status": "OPEN",
                "animal_remark": "",
                "animal_caption": "",
                "animal_opendate": "2022-03-29",
                "animal_closeddate": "2999-12-31",
                "animal_update": "2022/03/29",
                "animal_createtime": "2022/03/29",
                "shelter_name": "苗栗縣生態保育教育中心(動物收容所)",
                "album_file": "https://asms.coa.gov.tw/amlapp/upload/pic/c6efb5f3-6807-4948-be67-b8328810f3e9_org.jpg",
                "album_update": "",
                "cDate": "2022/03/29",
                "shelter_address": "苗栗縣銅鑼鄉朝陽村6鄰朝北55-1號(地圖：https://goo.gl/maps/Bd4sckpEPsrof7Qb8)",
                "shelter_tel": "037-558228",
                "animal_Variety": "混種貓"
            },
            {
                "animal_id": 248534,
                "animal_subid": "EAAAG1110329003",
                "animal_area_pkid": 9,
                "animal_shelter_pkid": 96,
                "animal_place": "苗栗縣生態保育教育中心(動物收容所)",
                "animal_kind": "貓",
                "animal_sex": "M",
                "animal_bodytype": "BIG",
                "animal_colour": "虎斑色",
                "animal_age": "",
                "animal_sterilization": "F",
                "animal_bacterin": "F",
                "animal_foundplace": "頭份忠孝里",
                "animal_title": "",
                "animal_status": "OPEN",
                "animal_remark": "",
                "animal_caption": "",
                "animal_opendate": "2022-03-29",
                "animal_closeddate": "2999-12-31",
                "animal_update": "2022/03/29",
                "animal_createtime": "2022/03/29",
                "shelter_name": "苗栗縣生態保育教育中心(動物收容所)",
                "album_file": "https://asms.coa.gov.tw/amlapp/upload/pic/0fe735d1-3cb4-483f-80c1-86b1894a9d5b_org.jpg",
                "album_update": "",
                "cDate": "2022/03/29",
                "shelter_address": "苗栗縣銅鑼鄉朝陽村6鄰朝北55-1號(地圖：https://goo.gl/maps/Bd4sckpEPsrof7Qb8)",
                "shelter_tel": "037-558228",
                "animal_Variety": "混種貓"
            },
            {
                "animal_id": 242210,
                "animal_subid": "AAADG2022021203",
                "animal_area_pkid": 3,
                "animal_shelter_pkid": 50,
                "animal_place": "新北市板橋區公立動物之家",
                "animal_kind": "貓",
                "animal_sex": "M",
                "animal_bodytype": "SMALL",
                "animal_colour": "虎斑色",
                "animal_age": "",
                "animal_sterilization": "T",
                "animal_bacterin": "F",
                "animal_foundplace": "板橋區喬中一街",
                "animal_title": "",
                "animal_status": "OPEN",
                "animal_remark": "2/12除蚤",
                "animal_caption": "",
                "animal_opendate": "2022-02-12",
                "animal_closeddate": "2999-12-31",
                "animal_update": "2022/03/29",
                "animal_createtime": "2022/02/12",
                "shelter_name": "新北市板橋區公立動物之家",
                "album_file": "https://asms.coa.gov.tw/amlapp/upload/pic/677655f6-de28-444e-8392-da6553ad7da4_org.jpg",
                "album_update": "",
                "cDate": "2022/03/29",
                "shelter_address": "新北市板橋區板城路28-1號",
                "shelter_tel": "02-89662158",
                "animal_Variety": "混種貓"
            },
            {
                "animal_id": 248242,
                "animal_subid": "EAAAG1110327009",
                "animal_area_pkid": 9,
                "animal_shelter_pkid": 96,
                "animal_place": "苗栗縣生態保育教育中心(動物收容所)",
                "animal_kind": "狗",
                "animal_sex": "M",
                "animal_bodytype": "BIG",
                "animal_colour": "黃色",
                "animal_age": "",
                "animal_sterilization": "T",
                "animal_bacterin": "F",
                "animal_foundplace": "西湖鄉三湖村",
                "animal_title": "",
                "animal_status": "OPEN",
                "animal_remark": "",
                "animal_caption": "",
                "animal_opendate": "2022-03-27",
                "animal_closeddate": "2999-12-31",
                "animal_update": "2022/03/29",
                "animal_createtime": "2022/03/27",
                "shelter_name": "苗栗縣生態保育教育中心(動物收容所)",
                "album_file": "https://asms.coa.gov.tw/amlapp/upload/pic/b3167fae-3976-4c16-959a-396de120824c_org.jpg",
                "album_update": "",
                "cDate": "2022/03/29",
                "shelter_address": "苗栗縣銅鑼鄉朝陽村6鄰朝北55-1號(地圖：https://goo.gl/maps/Bd4sckpEPsrof7Qb8)",
                "shelter_tel": "037-558228",
                "animal_Variety": "混種狗"
            },
            {
                "animal_id": 248525,
                "animal_subid": "1110496",
                "animal_area_pkid": 5,
                "animal_shelter_pkid": 78,
                "animal_place": "宜蘭縣流浪動物中途之家",
                "animal_kind": "狗",
                "animal_sex": "F",
                "animal_bodytype": "BIG",
                "animal_colour": "黃色",
                "animal_age": "",
                "animal_sterilization": "F",
                "animal_bacterin": "F",
                "animal_foundplace": "大興路",
                "animal_title": "",
                "animal_status": "OPEN",
                "animal_remark": "",
                "animal_caption": "",
                "animal_opendate": "2022-03-29",
                "animal_closeddate": "2999-12-31",
                "animal_update": "2022/03/29",
                "animal_createtime": "2022/03/29",
                "shelter_name": "宜蘭縣流浪動物中途之家",
                "album_file": "https://asms.coa.gov.tw/amlapp/upload/pic/d013c8d3-4062-41e1-a3e0-b2ff6ae94dce_org.jpg",
                "album_update": "",
                "cDate": "2022/03/29",
                "shelter_address": "宜蘭縣五結鄉成興村利寶路60號",
                "shelter_tel": "039602350分機620",
                "animal_Variety": "混種狗"
            },
            {
                "animal_id": 248518,
                "animal_subid": "EAAAG1110329002",
                "animal_area_pkid": 9,
                "animal_shelter_pkid": 96,
                "animal_place": "苗栗縣生態保育教育中心(動物收容所)",
                "animal_kind": "狗",
                "animal_sex": "F",
                "animal_bodytype": "BIG",
                "animal_colour": "黑黃色",
                "animal_age": "",
                "animal_sterilization": "T",
                "animal_bacterin": "F",
                "animal_foundplace": "三義鄉廣盛村",
                "animal_title": "",
                "animal_status": "OPEN",
                "animal_remark": "",
                "animal_caption": "",
                "animal_opendate": "2022-03-29",
                "animal_closeddate": "2999-12-31",
                "animal_update": "2022/03/29",
                "animal_createtime": "2022/03/29",
                "shelter_name": "苗栗縣生態保育教育中心(動物收容所)",
                "album_file": "https://asms.coa.gov.tw/amlapp/upload/pic/0a31318e-212b-4458-aa3a-0f8fc0b3e843_org.jpg",
                "album_update": "",
                "cDate": "2022/03/29",
                "shelter_address": "苗栗縣銅鑼鄉朝陽村6鄰朝北55-1號(地圖：https://goo.gl/maps/Bd4sckpEPsrof7Qb8)",
                "shelter_tel": "037-558228",
                "animal_Variety": "混種狗"
            },
            {
                "animal_id": 248516,
                "animal_subid": "EAAAG1110329001",
                "animal_area_pkid": 9,
                "animal_shelter_pkid": 96,
                "animal_place": "苗栗縣生態保育教育中心(動物收容所)",
                "animal_kind": "狗",
                "animal_sex": "M",
                "animal_bodytype": "BIG",
                "animal_colour": "黃色",
                "animal_age": "",
                "animal_sterilization": "F",
                "animal_bacterin": "F",
                "animal_foundplace": "頭份市民族里",
                "animal_title": "",
                "animal_status": "OPEN",
                "animal_remark": "",
                "animal_caption": "",
                "animal_opendate": "2022-03-29",
                "animal_closeddate": "2999-12-31",
                "animal_update": "2022/03/29",
                "animal_createtime": "2022/03/29",
                "shelter_name": "苗栗縣生態保育教育中心(動物收容所)",
                "album_file": "https://asms.coa.gov.tw/amlapp/upload/pic/28c28970-2d3c-4809-bf06-879495ca95b6_org.jpg",
                "album_update": "",
                "cDate": "2022/03/29",
                "shelter_address": "苗栗縣銅鑼鄉朝陽村6鄰朝北55-1號(地圖：https://goo.gl/maps/Bd4sckpEPsrof7Qb8)",
                "shelter_tel": "037-558228",
                "animal_Variety": "混種狗"
            },
            {
                "animal_id": 248515,
                "animal_subid": "AAAHG1110329004",
                "animal_area_pkid": 3,
                "animal_shelter_pkid": 58,
                "animal_place": "新北市五股區公立動物之家",
                "animal_kind": "狗",
                "animal_sex": "F",
                "animal_bodytype": "MEDIUM",
                "animal_colour": "虎斑色",
                "animal_age": "",
                "animal_sterilization": "F",
                "animal_bacterin": "F",
                "animal_foundplace": "五工二路",
                "animal_title": "",
                "animal_status": "OPEN",
                "animal_remark": "",
                "animal_caption": "",
                "animal_opendate": "2022-03-29",
                "animal_closeddate": "2999-12-31",
                "animal_update": "2022/03/29",
                "animal_createtime": "2022/03/29",
                "shelter_name": "新北市五股區公立動物之家",
                "album_file": "https://asms.coa.gov.tw/amlapp/upload/pic/3c32c8c7-70eb-448d-80ae-602f45dd9d66_org.jpg",
                "album_update": "",
                "cDate": "2022/03/29",
                "shelter_address": "新北市五股區外寮路9-9號",
                "shelter_tel": "02-82925265",
                "animal_Variety": "混種狗"
            },
            ],
        };
    },
    mounted() {
        var data = [{
                "animal_id": 248135,
                "animal_subid": "LAABG111020706",
                "animal_area_pkid": 17,
                "animal_shelter_pkid": 76,
                "animal_place": "高雄市燕巢動物保護關愛園區",
                "animal_kind": "狗",
                "animal_sex": "F",
                "animal_bodytype": "MEDIUM",
                "animal_colour": "黑色",
                "animal_age": "",
                "animal_sterilization": "F",
                "animal_bacterin": "F",
                "animal_foundplace": "維新路",
                "animal_title": "",
                "animal_status": "OPEN",
                "animal_remark": "",
                "animal_caption": "",
                "animal_opendate": "2022-03-03",
                "animal_closeddate": "2999-12-31",
                "animal_update": "2022/03/29",
                "animal_createtime": "2022/03/03",
                "shelter_name": "高雄市燕巢動物保護關愛園區",
                "album_file": "https://asms.coa.gov.tw/amlapp/upload/pic/60c82e2e-0051-4c9b-beea-d091e6ec3652_org.JPG",
                "album_update": "",
                "cDate": "2022/03/29",
                "shelter_address": "高雄市燕巢區師大路98號",
                "shelter_tel": "07-6051002",
                "animal_Variety": "混種狗"
            },
            {
                "animal_id": 248510,
                "animal_subid": "RAAAG1110329003",
                "animal_area_pkid": 8,
                "animal_shelter_pkid": 62,
                "animal_place": "新竹市動物保護教育園區",
                "animal_kind": "狗",
                "animal_sex": "F",
                "animal_bodytype": "MEDIUM",
                "animal_colour": "黃色",
                "animal_age": "",
                "animal_sterilization": "T",
                "animal_bacterin": "F",
                "animal_foundplace": "延平路三段",
                "animal_title": "",
                "animal_status": "OPEN",
                "animal_remark": "",
                "animal_caption": "",
                "animal_opendate": "2022-04-05",
                "animal_closeddate": "2999-12-31",
                "animal_update": "2022/03/29",
                "animal_createtime": "2022/03/29",
                "shelter_name": "新竹市動物保護教育園區",
                "album_file": "https://asms.coa.gov.tw/amlapp/upload/pic/ba9eb8d1-7716-4833-9742-3b922be9f883_org.jpg",
                "album_update": "",
                "cDate": "2022/03/29",
                "shelter_address": "新竹市南寮里海濱路250號",
                "shelter_tel": "03-5368329",
                "animal_Variety": "高山犬"
            },
            {
                "animal_id": 248575,
                "animal_subid": "LAAAG1110329C4",
                "animal_area_pkid": 17,
                "animal_shelter_pkid": 75,
                "animal_place": "高雄市壽山動物保護教育園區",
                "animal_kind": "貓",
                "animal_sex": "F",
                "animal_bodytype": "BIG",
                "animal_colour": "虎斑色",
                "animal_age": "",
                "animal_sterilization": "F",
                "animal_bacterin": "F",
                "animal_foundplace": "鼎立路",
                "animal_title": "",
                "animal_status": "OPEN",
                "animal_remark": "※協尋飼主 暫不開放",
                "animal_caption": "",
                "animal_opendate": "",
                "animal_closeddate": "2999-12-31",
                "animal_update": "2022/03/29",
                "animal_createtime": "2022/03/29",
                "shelter_name": "高雄市壽山動物保護教育園區",
                "album_file": "https://asms.coa.gov.tw/amlapp/upload/pic/083d0b8e-b6cb-44f8-9ec6-bb5a46650df1_org.JPG",
                "album_update": "",
                "cDate": "2022/03/29",
                "shelter_address": "高雄市鼓山區萬壽路350號",
                "shelter_tel": "07-5519059",
                "animal_Variety": "混種貓"
            },
            {
                "animal_id": 248511,
                "animal_subid": "RAAAG1110329004",
                "animal_area_pkid": 8,
                "animal_shelter_pkid": 62,
                "animal_place": "新竹市動物保護教育園區",
                "animal_kind": "狗",
                "animal_sex": "M",
                "animal_bodytype": "MEDIUM",
                "animal_colour": "黑色",
                "animal_age": "",
                "animal_sterilization": "T",
                "animal_bacterin": "F",
                "animal_foundplace": "延平路三段",
                "animal_title": "",
                "animal_status": "OPEN",
                "animal_remark": "",
                "animal_caption": "",
                "animal_opendate": "2022-04-05",
                "animal_closeddate": "2999-12-31",
                "animal_update": "2022/03/29",
                "animal_createtime": "2022/03/29",
                "shelter_name": "新竹市動物保護教育園區",
                "album_file": "https://asms.coa.gov.tw/amlapp/upload/pic/5c818a51-e8c3-44d8-8ffb-ba0b497be07b_org.jpg",
                "album_update": "",
                "cDate": "2022/03/29",
                "shelter_address": "新竹市南寮里海濱路250號",
                "shelter_tel": "03-5368329",
                "animal_Variety": "混種狗"
            },
            {
                "animal_id": 245038,
                "animal_subid": "111030603",
                "animal_area_pkid": 2,
                "animal_shelter_pkid": 49,
                "animal_place": "臺北市動物之家",
                "animal_kind": "貓",
                "animal_sex": "F",
                "animal_bodytype": "MEDIUM",
                "animal_colour": "黑色",
                "animal_age": "",
                "animal_sterilization": "F",
                "animal_bacterin": "F",
                "animal_foundplace": "研究院路一段(原救援地址：雙連街)",
                "animal_title": "",
                "animal_status": "OPEN",
                "animal_remark": "急傷回(骨盆骨折、右後肢反應差、體外驅蟲)，右剪耳，111/3/15 開放認養",
                "animal_caption": "",
                "animal_opendate": "2022-03-15",
                "animal_closeddate": "2999-12-31",
                "animal_update": "2022/03/29",
                "animal_createtime": "2022/03/06",
                "shelter_name": "臺北市動物之家",
                "album_file": "https://asms.coa.gov.tw/amlapp/upload/pic/75ae7454-fb87-418f-bde9-a27bf06040ea_org.jpg",
                "album_update": "",
                "cDate": "2022/03/29",
                "shelter_address": "臺北市內湖區潭美街852號",
                "shelter_tel": "02-87913254",
                "animal_Variety": "混種貓"
            },
            {
                "animal_id": 248574,
                "animal_subid": "1110498",
                "animal_area_pkid": 5,
                "animal_shelter_pkid": 78,
                "animal_place": "宜蘭縣流浪動物中途之家",
                "animal_kind": "狗",
                "animal_sex": "M",
                "animal_bodytype": "BIG",
                "animal_colour": "棕白色",
                "animal_age": "",
                "animal_sterilization": "F",
                "animal_bacterin": "F",
                "animal_foundplace": "蘇澳東澳路",
                "animal_title": "",
                "animal_status": "OPEN",
                "animal_remark": "",
                "animal_caption": "",
                "animal_opendate": "2022-03-29",
                "animal_closeddate": "2999-12-31",
                "animal_update": "2022/03/29",
                "animal_createtime": "2022/03/29",
                "shelter_name": "宜蘭縣流浪動物中途之家",
                "album_file": "",
                "album_update": "",
                "cDate": "2022/03/29",
                "shelter_address": "宜蘭縣五結鄉成興村利寶路60號",
                "shelter_tel": "039602350分機620",
                "animal_Variety": "比特"
            },
            {
                "animal_id": 247131,
                "animal_subid": "XAAAG1110318001",
                "animal_area_pkid": 23,
                "animal_shelter_pkid": 81,
                "animal_place": "連江縣流浪犬收容中心",
                "animal_kind": "狗",
                "animal_sex": "F",
                "animal_bodytype": "MEDIUM",
                "animal_colour": "白色",
                "animal_age": "",
                "animal_sterilization": "F",
                "animal_bacterin": "F",
                "animal_foundplace": "南竿鄉復興村",
                "animal_title": "",
                "animal_status": "OPEN",
                "animal_remark": "",
                "animal_caption": "",
                "animal_opendate": "2022-03-18",
                "animal_closeddate": "2999-12-31",
                "animal_update": "2022/03/29",
                "animal_createtime": "2022/03/18",
                "shelter_name": "連江縣流浪犬收容中心",
                "album_file": "https://asms.coa.gov.tw/amlapp/upload/pic/4a9a87ed-075c-4227-8225-3857ea8022cd_org.jpg",
                "album_update": "",
                "cDate": "2022/03/29",
                "shelter_address": "連江縣南竿鄉復興村223號",
                "shelter_tel": "0836-25003",
                "animal_Variety": "混種狗"
            },
            {
                "animal_id": 246335,
                "animal_subid": "DAAAG1110314005",
                "animal_area_pkid": 7,
                "animal_shelter_pkid": 63,
                "animal_place": "新竹縣公立動物收容所",
                "animal_kind": "狗",
                "animal_sex": "F",
                "animal_bodytype": "MEDIUM",
                "animal_colour": "黑色",
                "animal_age": "",
                "animal_sterilization": "F",
                "animal_bacterin": "F",
                "animal_foundplace": "竹北",
                "animal_title": "",
                "animal_status": "OPEN",
                "animal_remark": "入所時右耳已剪耳。兩側腋下犬咬撕裂傷(3/28已復原)。可摸可牽",
                "animal_caption": "",
                "animal_opendate": "2022-03-14",
                "animal_closeddate": "2999-12-31",
                "animal_update": "2022/03/29",
                "animal_createtime": "2022/03/14",
                "shelter_name": "新竹縣公立動物收容所",
                "album_file": "https://asms.coa.gov.tw/amlapp/upload/pic/b95a05fe-5fda-4f4a-9ece-7c725f8040a4_org.jpg",
                "album_update": "",
                "cDate": "2022/03/29",
                "shelter_address": "新竹縣竹北市縣政五街192號",
                "shelter_tel": "03-5519548",
                "animal_Variety": "混種狗"
            },
            {
                "animal_id": 247714,
                "animal_subid": "DAAAG1110323001",
                "animal_area_pkid": 7,
                "animal_shelter_pkid": 63,
                "animal_place": "新竹縣公立動物收容所",
                "animal_kind": "狗",
                "animal_sex": "F",
                "animal_bodytype": "MEDIUM",
                "animal_colour": "黑色",
                "animal_age": "",
                "animal_sterilization": "F",
                "animal_bacterin": "F",
                "animal_foundplace": "新豐",
                "animal_title": "",
                "animal_status": "OPEN",
                "animal_remark": "入所時右耳已剪耳。車禍救援，X光可見恥骨骨折，另左前腕部外傷治療中。入所時無法站立，3/28觀察到可短暫站立，後續仍待評估觀察。",
                "animal_caption": "",
                "animal_opendate": "2022-03-23",
                "animal_closeddate": "2999-12-31",
                "animal_update": "2022/03/29",
                "animal_createtime": "2022/03/23",
                "shelter_name": "新竹縣公立動物收容所",
                "album_file": "https://asms.coa.gov.tw/amlapp/upload/pic/656204bc-dba6-4f8a-bec9-41040700a340_org.jpg",
                "album_update": "",
                "cDate": "2022/03/29",
                "shelter_address": "新竹縣竹北市縣政五街192號",
                "shelter_tel": "03-5519548",
                "animal_Variety": "混種狗"
            },
            {
                "animal_id": 247716,
                "animal_subid": "DAAAG1110323002",
                "animal_area_pkid": 7,
                "animal_shelter_pkid": 63,
                "animal_place": "新竹縣公立動物收容所",
                "animal_kind": "狗",
                "animal_sex": "F",
                "animal_bodytype": "MEDIUM",
                "animal_colour": "黃色",
                "animal_age": "ADULT",
                "animal_sterilization": "F",
                "animal_bacterin": "F",
                "animal_foundplace": "湖口",
                "animal_title": "",
                "animal_status": "OPEN",
                "animal_remark": "疑似車禍，X光可見骨盆骨折，入所時精神不佳無法站立，後續仍待評估觀察(3/29精神變好願意進食仍無法站立)",
                "animal_caption": "",
                "animal_opendate": "2022-03-23",
                "animal_closeddate": "2999-12-31",
                "animal_update": "2022/03/29",
                "animal_createtime": "2022/03/23",
                "shelter_name": "新竹縣公立動物收容所",
                "album_file": "https://asms.coa.gov.tw/amlapp/upload/pic/1ce7032a-9290-4826-923f-ce9810693de6_org.jpg",
                "album_update": "",
                "cDate": "2022/03/29",
                "shelter_address": "新竹縣竹北市縣政五街192號",
                "shelter_tel": "03-5519548",
                "animal_Variety": "混種狗"
            },
            {
                "animal_id": 248564,
                "animal_subid": "RAAAG1110329006",
                "animal_area_pkid": 8,
                "animal_shelter_pkid": 62,
                "animal_place": "新竹市動物保護教育園區",
                "animal_kind": "貓",
                "animal_sex": "M",
                "animal_bodytype": "MEDIUM",
                "animal_colour": "白色",
                "animal_age": "",
                "animal_sterilization": "F",
                "animal_bacterin": "F",
                "animal_foundplace": "東光路",
                "animal_title": "",
                "animal_status": "OPEN",
                "animal_remark": "",
                "animal_caption": "",
                "animal_opendate": "",
                "animal_closeddate": "2999-12-31",
                "animal_update": "2022/03/29",
                "animal_createtime": "2022/03/29",
                "shelter_name": "新竹市動物保護教育園區",
                "album_file": "https://asms.coa.gov.tw/amlapp/upload/pic/17dbe034-11a8-4436-bcfd-ef9de6139536_org.JPG",
                "album_update": "",
                "cDate": "2022/03/29",
                "shelter_address": "新竹市南寮里海濱路250號",
                "shelter_tel": "03-5368329",
                "animal_Variety": "混種貓"
            },
            {
                "animal_id": 248563,
                "animal_subid": "GAAAG1110329006",
                "animal_area_pkid": 11,
                "animal_shelter_pkid": 69,
                "animal_place": "彰化縣流浪狗中途之家",
                "animal_kind": "狗",
                "animal_sex": "N",
                "animal_bodytype": "MEDIUM",
                "animal_colour": "黃白色",
                "animal_age": "",
                "animal_sterilization": "F",
                "animal_bacterin": "F",
                "animal_foundplace": "員大路",
                "animal_title": "",
                "animal_status": "OPEN",
                "animal_remark": "111.04.06早上10點開放認養（拾獲者有意願要認養，緊急帶出目前不在所內）",
                "animal_caption": "",
                "animal_opendate": "2022-04-06",
                "animal_closeddate": "2999-12-31",
                "animal_update": "2022/03/29",
                "animal_createtime": "2022/03/29",
                "shelter_name": "彰化縣流浪狗中途之家",
                "album_file": "https://asms.coa.gov.tw/amlapp/upload/pic/228da5e8-44ec-454f-8ffc-4c6b536fcffa_org.jpg",
                "album_update": "",
                "cDate": "2022/03/29",
                "shelter_address": "彰化縣員林市大峰里阿寶巷426號(大門入口請由彰化縣芬園鄉大彰路一段875巷進入走到底)",
                "shelter_tel": "04-8590638",
                "animal_Variety": "柯基"
            },
            {
                "animal_id": 247297,
                "animal_subid": "HAAAG1110321YC2",
                "animal_area_pkid": 12,
                "animal_shelter_pkid": 70,
                "animal_place": "南投縣公立動物收容所",
                "animal_kind": "貓",
                "animal_sex": "F",
                "animal_bodytype": "SMALL",
                "animal_colour": "黑白色",
                "animal_age": "",
                "animal_sterilization": "T",
                "animal_bacterin": "F",
                "animal_foundplace": "南投縣鹿谷鄉仁愛路",
                "animal_title": "",
                "animal_status": "OPEN",
                "animal_remark": "",
                "animal_caption": "",
                "animal_opendate": "2022-03-21",
                "animal_closeddate": "2999-12-31",
                "animal_update": "2022/03/29",
                "animal_createtime": "2022/03/21",
                "shelter_name": "南投縣公立動物收容所",
                "album_file": "https://asms.coa.gov.tw/amlapp/upload/pic/9660138f-ffcc-4811-818f-77848ec017a7_org.JPG",
                "album_update": "",
                "cDate": "2022/03/29",
                "shelter_address": "南投縣南投市嶺興路36-1號",
                "shelter_tel": "049-2225440",
                "animal_Variety": "混種貓"
            },
            {
                "animal_id": 248561,
                "animal_subid": "GAAAG1110329005",
                "animal_area_pkid": 11,
                "animal_shelter_pkid": 69,
                "animal_place": "彰化縣流浪狗中途之家",
                "animal_kind": "狗",
                "animal_sex": "M",
                "animal_bodytype": "MEDIUM",
                "animal_colour": "黑色",
                "animal_age": "",
                "animal_sterilization": "F",
                "animal_bacterin": "F",
                "animal_foundplace": "彰化師大（寶山校區）",
                "animal_title": "",
                "animal_status": "OPEN",
                "animal_remark": "",
                "animal_caption": "",
                "animal_opendate": "2022-03-29",
                "animal_closeddate": "2999-12-31",
                "animal_update": "2022/03/29",
                "animal_createtime": "2022/03/29",
                "shelter_name": "彰化縣流浪狗中途之家",
                "album_file": "https://asms.coa.gov.tw/amlapp/upload/pic/91cccc7c-1c56-4e8a-8602-8f5f89b958f2_org.jpg",
                "album_update": "",
                "cDate": "2022/03/29",
                "shelter_address": "彰化縣員林市大峰里阿寶巷426號(大門入口請由彰化縣芬園鄉大彰路一段875巷進入走到底)",
                "shelter_tel": "04-8590638",
                "animal_Variety": "混種狗"
            },
            {
                "animal_id": 248560,
                "animal_subid": "GAAAG1110329004",
                "animal_area_pkid": 11,
                "animal_shelter_pkid": 69,
                "animal_place": "彰化縣流浪狗中途之家",
                "animal_kind": "狗",
                "animal_sex": "M",
                "animal_bodytype": "MEDIUM",
                "animal_colour": "虎斑色",
                "animal_age": "",
                "animal_sterilization": "F",
                "animal_bacterin": "F",
                "animal_foundplace": "聖安路159號",
                "animal_title": "",
                "animal_status": "OPEN",
                "animal_remark": "",
                "animal_caption": "",
                "animal_opendate": "2022-03-29",
                "animal_closeddate": "2999-12-31",
                "animal_update": "2022/03/29",
                "animal_createtime": "2022/03/29",
                "shelter_name": "彰化縣流浪狗中途之家",
                "album_file": "",
                "album_update": "",
                "cDate": "2022/03/29",
                "shelter_address": "彰化縣員林市大峰里阿寶巷426號(大門入口請由彰化縣芬園鄉大彰路一段875巷進入走到底)",
                "shelter_tel": "04-8590638",
                "animal_Variety": "混種狗"
            },
            {
                "animal_id": 234356,
                "animal_subid": "JAAAG1101208002",
                "animal_area_pkid": 14,
                "animal_shelter_pkid": 72,
                "animal_place": "嘉義縣流浪犬中途之家",
                "animal_kind": "狗",
                "animal_sex": "F",
                "animal_bodytype": "BIG",
                "animal_colour": "黑色",
                "animal_age": "",
                "animal_sterilization": "T",
                "animal_bacterin": "F",
                "animal_foundplace": "水上鄉柳林村",
                "animal_title": "",
                "animal_status": "OPEN",
                "animal_remark": "",
                "animal_caption": "",
                "animal_opendate": "2022-03-29",
                "animal_closeddate": "2999-12-31",
                "animal_update": "2022/03/29",
                "animal_createtime": "2021/12/08",
                "shelter_name": "嘉義縣流浪犬中途之家",
                "album_file": "https://asms.coa.gov.tw/amlapp/upload/pic/968d66a8-fab8-4dba-96fc-86de4823c3ad_org.JPG",
                "album_update": "",
                "cDate": "2022/03/29",
                "shelter_address": "嘉義縣大林鎮中坑里中興2-6號",
                "shelter_tel": "05-2950053",
                "animal_Variety": "混種狗"
            },
            {
                "animal_id": 248559,
                "animal_subid": "GAAAG1110329003",
                "animal_area_pkid": 11,
                "animal_shelter_pkid": 69,
                "animal_place": "彰化縣流浪狗中途之家",
                "animal_kind": "狗",
                "animal_sex": "F",
                "animal_bodytype": "MEDIUM",
                "animal_colour": "虎斑色",
                "animal_age": "",
                "animal_sterilization": "F",
                "animal_bacterin": "F",
                "animal_foundplace": "聖安路159號",
                "animal_title": "",
                "animal_status": "OPEN",
                "animal_remark": "",
                "animal_caption": "",
                "animal_opendate": "2022-03-29",
                "animal_closeddate": "2999-12-31",
                "animal_update": "2022/03/29",
                "animal_createtime": "2022/03/29",
                "shelter_name": "彰化縣流浪狗中途之家",
                "album_file": "",
                "album_update": "",
                "cDate": "2022/03/29",
                "shelter_address": "彰化縣員林市大峰里阿寶巷426號(大門入口請由彰化縣芬園鄉大彰路一段875巷進入走到底)",
                "shelter_tel": "04-8590638",
                "animal_Variety": "混種狗"
            },
            {
                "animal_id": 248552,
                "animal_subid": "AAAFG1110329001",
                "animal_area_pkid": 3,
                "animal_shelter_pkid": 55,
                "animal_place": "新北市淡水區公立動物之家",
                "animal_kind": "貓",
                "animal_sex": "M",
                "animal_bodytype": "SMALL",
                "animal_colour": "虎斑色",
                "animal_age": "",
                "animal_sterilization": "T",
                "animal_bacterin": "F",
                "animal_foundplace": "淡水區樹梅坑（楓丹白露社區）",
                "animal_title": "",
                "animal_status": "OPEN",
                "animal_remark": "管制號：095474，1110310絕育，狂犬病疫苗，四合一疫苗，體內外驅蟲，晶片：992007300082619",
                "animal_caption": "",
                "animal_opendate": "2022-03-29",
                "animal_closeddate": "2999-12-31",
                "animal_update": "2022/03/29",
                "animal_createtime": "2022/03/29",
                "shelter_name": "新北市淡水區公立動物之家",
                "album_file": "",
                "album_update": "",
                "cDate": "2022/03/29",
                "shelter_address": "新北市淡水區下圭柔山91之3號",
                "shelter_tel": "02-26267558",
                "animal_Variety": "混種貓"
            },
            {
                "animal_id": 248536,
                "animal_subid": "EAAAG1110329005",
                "animal_area_pkid": 9,
                "animal_shelter_pkid": 96,
                "animal_place": "苗栗縣生態保育教育中心(動物收容所)",
                "animal_kind": "狗",
                "animal_sex": "F",
                "animal_bodytype": "BIG",
                "animal_colour": "黑色",
                "animal_age": "",
                "animal_sterilization": "F",
                "animal_bacterin": "F",
                "animal_foundplace": "卓",
                "animal_title": "",
                "animal_status": "OPEN",
                "animal_remark": "",
                "animal_caption": "",
                "animal_opendate": "2022-03-29",
                "animal_closeddate": "2999-12-31",
                "animal_update": "2022/03/29",
                "animal_createtime": "2022/03/29",
                "shelter_name": "苗栗縣生態保育教育中心(動物收容所)",
                "album_file": "https://asms.coa.gov.tw/amlapp/upload/pic/62cb64c4-7591-4901-89e3-2194f0799631_org.jpg",
                "album_update": "",
                "cDate": "2022/03/29",
                "shelter_address": "苗栗縣銅鑼鄉朝陽村6鄰朝北55-1號(地圖：https://goo.gl/maps/Bd4sckpEPsrof7Qb8)",
                "shelter_tel": "037-558228",
                "animal_Variety": "混種狗"
            },
            {
                "animal_id": 248547,
                "animal_subid": "EAAAG1110329013",
                "animal_area_pkid": 9,
                "animal_shelter_pkid": 96,
                "animal_place": "苗栗縣生態保育教育中心(動物收容所)",
                "animal_kind": "狗",
                "animal_sex": "F",
                "animal_bodytype": "BIG",
                "animal_colour": "黑色",
                "animal_age": "",
                "animal_sterilization": "F",
                "animal_bacterin": "F",
                "animal_foundplace": "三",
                "animal_title": "",
                "animal_status": "OPEN",
                "animal_remark": "",
                "animal_caption": "",
                "animal_opendate": "2022-03-29",
                "animal_closeddate": "2999-12-31",
                "animal_update": "2022/03/29",
                "animal_createtime": "2022/03/29",
                "shelter_name": "苗栗縣生態保育教育中心(動物收容所)",
                "album_file": "https://asms.coa.gov.tw/amlapp/upload/pic/1778a843-3c22-4e12-bfde-4b63776fe4af_org.jpg",
                "album_update": "",
                "cDate": "2022/03/29",
                "shelter_address": "苗栗縣銅鑼鄉朝陽村6鄰朝北55-1號(地圖：https://goo.gl/maps/Bd4sckpEPsrof7Qb8)",
                "shelter_tel": "037-558228",
                "animal_Variety": "混種狗"
            },
            {
                "animal_id": 248546,
                "animal_subid": "EAAAG1110329012",
                "animal_area_pkid": 9,
                "animal_shelter_pkid": 96,
                "animal_place": "苗栗縣生態保育教育中心(動物收容所)",
                "animal_kind": "狗",
                "animal_sex": "F",
                "animal_bodytype": "BIG",
                "animal_colour": "黑色",
                "animal_age": "",
                "animal_sterilization": "F",
                "animal_bacterin": "F",
                "animal_foundplace": "三",
                "animal_title": "",
                "animal_status": "OPEN",
                "animal_remark": "",
                "animal_caption": "",
                "animal_opendate": "2022-03-29",
                "animal_closeddate": "2999-12-31",
                "animal_update": "2022/03/29",
                "animal_createtime": "2022/03/29",
                "shelter_name": "苗栗縣生態保育教育中心(動物收容所)",
                "album_file": "https://asms.coa.gov.tw/amlapp/upload/pic/1778a843-3c22-4e12-bfde-4b63776fe4af_org.jpg",
                "album_update": "",
                "cDate": "2022/03/29",
                "shelter_address": "苗栗縣銅鑼鄉朝陽村6鄰朝北55-1號(地圖：https://goo.gl/maps/Bd4sckpEPsrof7Qb8)",
                "shelter_tel": "037-558228",
                "animal_Variety": "混種狗"
            },
            {
                "animal_id": 248544,
                "animal_subid": "EAAAG1110329011",
                "animal_area_pkid": 9,
                "animal_shelter_pkid": 96,
                "animal_place": "苗栗縣生態保育教育中心(動物收容所)",
                "animal_kind": "貓",
                "animal_sex": "F",
                "animal_bodytype": "BIG",
                "animal_colour": "虎斑色",
                "animal_age": "",
                "animal_sterilization": "F",
                "animal_bacterin": "F",
                "animal_foundplace": "通宵梅南里",
                "animal_title": "",
                "animal_status": "OPEN",
                "animal_remark": "",
                "animal_caption": "",
                "animal_opendate": "2022-03-29",
                "animal_closeddate": "2999-12-31",
                "animal_update": "2022/03/29",
                "animal_createtime": "2022/03/29",
                "shelter_name": "苗栗縣生態保育教育中心(動物收容所)",
                "album_file": "https://asms.coa.gov.tw/amlapp/upload/pic/cc2a9e7c-9c2f-4f4f-b84d-a29b54e63eaf_org.jpg",
                "album_update": "",
                "cDate": "2022/03/29",
                "shelter_address": "苗栗縣銅鑼鄉朝陽村6鄰朝北55-1號(地圖：https://goo.gl/maps/Bd4sckpEPsrof7Qb8)",
                "shelter_tel": "037-558228",
                "animal_Variety": "混種貓"
            },
            {
                "animal_id": 248542,
                "animal_subid": "EAAAG1110329010",
                "animal_area_pkid": 9,
                "animal_shelter_pkid": 96,
                "animal_place": "苗栗縣生態保育教育中心(動物收容所)",
                "animal_kind": "貓",
                "animal_sex": "F",
                "animal_bodytype": "BIG",
                "animal_colour": "虎斑色",
                "animal_age": "",
                "animal_sterilization": "F",
                "animal_bacterin": "F",
                "animal_foundplace": "通宵梅南里",
                "animal_title": "",
                "animal_status": "OPEN",
                "animal_remark": "",
                "animal_caption": "",
                "animal_opendate": "2022-03-29",
                "animal_closeddate": "2999-12-31",
                "animal_update": "2022/03/29",
                "animal_createtime": "2022/03/29",
                "shelter_name": "苗栗縣生態保育教育中心(動物收容所)",
                "album_file": "https://asms.coa.gov.tw/amlapp/upload/pic/23df496d-92cc-4d0a-9948-0e9f6ff66bc0_org.jpg",
                "album_update": "",
                "cDate": "2022/03/29",
                "shelter_address": "苗栗縣銅鑼鄉朝陽村6鄰朝北55-1號(地圖：https://goo.gl/maps/Bd4sckpEPsrof7Qb8)",
                "shelter_tel": "037-558228",
                "animal_Variety": "混種貓"
            },
            {
                "animal_id": 248541,
                "animal_subid": "EAAAG1110329009",
                "animal_area_pkid": 9,
                "animal_shelter_pkid": 96,
                "animal_place": "苗栗縣生態保育教育中心(動物收容所)",
                "animal_kind": "貓",
                "animal_sex": "F",
                "animal_bodytype": "BIG",
                "animal_colour": "三花色",
                "animal_age": "",
                "animal_sterilization": "F",
                "animal_bacterin": "F",
                "animal_foundplace": "通宵梅南里",
                "animal_title": "",
                "animal_status": "OPEN",
                "animal_remark": "",
                "animal_caption": "",
                "animal_opendate": "2022-03-29",
                "animal_closeddate": "2999-12-31",
                "animal_update": "2022/03/29",
                "animal_createtime": "2022/03/29",
                "shelter_name": "苗栗縣生態保育教育中心(動物收容所)",
                "album_file": "https://asms.coa.gov.tw/amlapp/upload/pic/6e90587c-7359-4a09-a83a-436fe23b4ec9_org.jpg",
                "album_update": "",
                "cDate": "2022/03/29",
                "shelter_address": "苗栗縣銅鑼鄉朝陽村6鄰朝北55-1號(地圖：https://goo.gl/maps/Bd4sckpEPsrof7Qb8)",
                "shelter_tel": "037-558228",
                "animal_Variety": "混種貓"
            },
            {
                "animal_id": 248539,
                "animal_subid": "EAAAG1110329008",
                "animal_area_pkid": 9,
                "animal_shelter_pkid": 96,
                "animal_place": "苗栗縣生態保育教育中心(動物收容所)",
                "animal_kind": "貓",
                "animal_sex": "M",
                "animal_bodytype": "BIG",
                "animal_colour": "白色",
                "animal_age": "",
                "animal_sterilization": "F",
                "animal_bacterin": "F",
                "animal_foundplace": "苗栗市勝利里",
                "animal_title": "",
                "animal_status": "OPEN",
                "animal_remark": "黴菌",
                "animal_caption": "",
                "animal_opendate": "2022-03-29",
                "animal_closeddate": "2999-12-31",
                "animal_update": "2022/03/29",
                "animal_createtime": "2022/03/29",
                "shelter_name": "苗栗縣生態保育教育中心(動物收容所)",
                "album_file": "https://asms.coa.gov.tw/amlapp/upload/pic/079c343b-d9e0-434c-827a-0b2e8ce91759_org.jpg",
                "album_update": "",
                "cDate": "2022/03/29",
                "shelter_address": "苗栗縣銅鑼鄉朝陽村6鄰朝北55-1號(地圖：https://goo.gl/maps/Bd4sckpEPsrof7Qb8)",
                "shelter_tel": "037-558228",
                "animal_Variety": "混種貓"
            },
            {
                "animal_id": 248538,
                "animal_subid": "EAAAG1110329007",
                "animal_area_pkid": 9,
                "animal_shelter_pkid": 96,
                "animal_place": "苗栗縣生態保育教育中心(動物收容所)",
                "animal_kind": "貓",
                "animal_sex": "M",
                "animal_bodytype": "BIG",
                "animal_colour": "虎斑色",
                "animal_age": "",
                "animal_sterilization": "F",
                "animal_bacterin": "F",
                "animal_foundplace": "通宵梅南里",
                "animal_title": "",
                "animal_status": "OPEN",
                "animal_remark": "",
                "animal_caption": "",
                "animal_opendate": "2022-03-29",
                "animal_closeddate": "2999-12-31",
                "animal_update": "2022/03/29",
                "animal_createtime": "2022/03/29",
                "shelter_name": "苗栗縣生態保育教育中心(動物收容所)",
                "album_file": "https://asms.coa.gov.tw/amlapp/upload/pic/57e2d828-2464-4e7d-8272-61a649282aa2_org.jpg",
                "album_update": "",
                "cDate": "2022/03/29",
                "shelter_address": "苗栗縣銅鑼鄉朝陽村6鄰朝北55-1號(地圖：https://goo.gl/maps/Bd4sckpEPsrof7Qb8)",
                "shelter_tel": "037-558228",
                "animal_Variety": "混種貓"
            },
            {
                "animal_id": 248537,
                "animal_subid": "EAAAG1110329006",
                "animal_area_pkid": 9,
                "animal_shelter_pkid": 96,
                "animal_place": "苗栗縣生態保育教育中心(動物收容所)",
                "animal_kind": "貓",
                "animal_sex": "M",
                "animal_bodytype": "BIG",
                "animal_colour": "虎斑色",
                "animal_age": "",
                "animal_sterilization": "F",
                "animal_bacterin": "F",
                "animal_foundplace": "通宵梅南里",
                "animal_title": "",
                "animal_status": "OPEN",
                "animal_remark": "",
                "animal_caption": "",
                "animal_opendate": "2022-03-29",
                "animal_closeddate": "2999-12-31",
                "animal_update": "2022/03/29",
                "animal_createtime": "2022/03/29",
                "shelter_name": "苗栗縣生態保育教育中心(動物收容所)",
                "album_file": "https://asms.coa.gov.tw/amlapp/upload/pic/e959200e-049f-4dac-aece-8fdefc8ba34c_org.jpg",
                "album_update": "",
                "cDate": "2022/03/29",
                "shelter_address": "苗栗縣銅鑼鄉朝陽村6鄰朝北55-1號(地圖：https://goo.gl/maps/Bd4sckpEPsrof7Qb8)",
                "shelter_tel": "037-558228",
                "animal_Variety": "混種貓"
            },
            {
                "animal_id": 248535,
                "animal_subid": "EAAAG1110329004",
                "animal_area_pkid": 9,
                "animal_shelter_pkid": 96,
                "animal_place": "苗栗縣生態保育教育中心(動物收容所)",
                "animal_kind": "貓",
                "animal_sex": "M",
                "animal_bodytype": "BIG",
                "animal_colour": "黃白色",
                "animal_age": "",
                "animal_sterilization": "F",
                "animal_bacterin": "F",
                "animal_foundplace": "通宵梅南里",
                "animal_title": "",
                "animal_status": "OPEN",
                "animal_remark": "",
                "animal_caption": "",
                "animal_opendate": "2022-03-29",
                "animal_closeddate": "2999-12-31",
                "animal_update": "2022/03/29",
                "animal_createtime": "2022/03/29",
                "shelter_name": "苗栗縣生態保育教育中心(動物收容所)",
                "album_file": "https://asms.coa.gov.tw/amlapp/upload/pic/c6efb5f3-6807-4948-be67-b8328810f3e9_org.jpg",
                "album_update": "",
                "cDate": "2022/03/29",
                "shelter_address": "苗栗縣銅鑼鄉朝陽村6鄰朝北55-1號(地圖：https://goo.gl/maps/Bd4sckpEPsrof7Qb8)",
                "shelter_tel": "037-558228",
                "animal_Variety": "混種貓"
            },
            {
                "animal_id": 248534,
                "animal_subid": "EAAAG1110329003",
                "animal_area_pkid": 9,
                "animal_shelter_pkid": 96,
                "animal_place": "苗栗縣生態保育教育中心(動物收容所)",
                "animal_kind": "貓",
                "animal_sex": "M",
                "animal_bodytype": "BIG",
                "animal_colour": "虎斑色",
                "animal_age": "",
                "animal_sterilization": "F",
                "animal_bacterin": "F",
                "animal_foundplace": "頭份忠孝里",
                "animal_title": "",
                "animal_status": "OPEN",
                "animal_remark": "",
                "animal_caption": "",
                "animal_opendate": "2022-03-29",
                "animal_closeddate": "2999-12-31",
                "animal_update": "2022/03/29",
                "animal_createtime": "2022/03/29",
                "shelter_name": "苗栗縣生態保育教育中心(動物收容所)",
                "album_file": "https://asms.coa.gov.tw/amlapp/upload/pic/0fe735d1-3cb4-483f-80c1-86b1894a9d5b_org.jpg",
                "album_update": "",
                "cDate": "2022/03/29",
                "shelter_address": "苗栗縣銅鑼鄉朝陽村6鄰朝北55-1號(地圖：https://goo.gl/maps/Bd4sckpEPsrof7Qb8)",
                "shelter_tel": "037-558228",
                "animal_Variety": "混種貓"
            },
            {
                "animal_id": 242210,
                "animal_subid": "AAADG2022021203",
                "animal_area_pkid": 3,
                "animal_shelter_pkid": 50,
                "animal_place": "新北市板橋區公立動物之家",
                "animal_kind": "貓",
                "animal_sex": "M",
                "animal_bodytype": "SMALL",
                "animal_colour": "虎斑色",
                "animal_age": "",
                "animal_sterilization": "T",
                "animal_bacterin": "F",
                "animal_foundplace": "板橋區喬中一街",
                "animal_title": "",
                "animal_status": "OPEN",
                "animal_remark": "2/12除蚤",
                "animal_caption": "",
                "animal_opendate": "2022-02-12",
                "animal_closeddate": "2999-12-31",
                "animal_update": "2022/03/29",
                "animal_createtime": "2022/02/12",
                "shelter_name": "新北市板橋區公立動物之家",
                "album_file": "https://asms.coa.gov.tw/amlapp/upload/pic/677655f6-de28-444e-8392-da6553ad7da4_org.jpg",
                "album_update": "",
                "cDate": "2022/03/29",
                "shelter_address": "新北市板橋區板城路28-1號",
                "shelter_tel": "02-89662158",
                "animal_Variety": "混種貓"
            },
            {
                "animal_id": 248242,
                "animal_subid": "EAAAG1110327009",
                "animal_area_pkid": 9,
                "animal_shelter_pkid": 96,
                "animal_place": "苗栗縣生態保育教育中心(動物收容所)",
                "animal_kind": "狗",
                "animal_sex": "M",
                "animal_bodytype": "BIG",
                "animal_colour": "黃色",
                "animal_age": "",
                "animal_sterilization": "T",
                "animal_bacterin": "F",
                "animal_foundplace": "西湖鄉三湖村",
                "animal_title": "",
                "animal_status": "OPEN",
                "animal_remark": "",
                "animal_caption": "",
                "animal_opendate": "2022-03-27",
                "animal_closeddate": "2999-12-31",
                "animal_update": "2022/03/29",
                "animal_createtime": "2022/03/27",
                "shelter_name": "苗栗縣生態保育教育中心(動物收容所)",
                "album_file": "https://asms.coa.gov.tw/amlapp/upload/pic/b3167fae-3976-4c16-959a-396de120824c_org.jpg",
                "album_update": "",
                "cDate": "2022/03/29",
                "shelter_address": "苗栗縣銅鑼鄉朝陽村6鄰朝北55-1號(地圖：https://goo.gl/maps/Bd4sckpEPsrof7Qb8)",
                "shelter_tel": "037-558228",
                "animal_Variety": "混種狗"
            },
            {
                "animal_id": 248525,
                "animal_subid": "1110496",
                "animal_area_pkid": 5,
                "animal_shelter_pkid": 78,
                "animal_place": "宜蘭縣流浪動物中途之家",
                "animal_kind": "狗",
                "animal_sex": "F",
                "animal_bodytype": "BIG",
                "animal_colour": "黃色",
                "animal_age": "",
                "animal_sterilization": "F",
                "animal_bacterin": "F",
                "animal_foundplace": "大興路",
                "animal_title": "",
                "animal_status": "OPEN",
                "animal_remark": "",
                "animal_caption": "",
                "animal_opendate": "2022-03-29",
                "animal_closeddate": "2999-12-31",
                "animal_update": "2022/03/29",
                "animal_createtime": "2022/03/29",
                "shelter_name": "宜蘭縣流浪動物中途之家",
                "album_file": "https://asms.coa.gov.tw/amlapp/upload/pic/d013c8d3-4062-41e1-a3e0-b2ff6ae94dce_org.jpg",
                "album_update": "",
                "cDate": "2022/03/29",
                "shelter_address": "宜蘭縣五結鄉成興村利寶路60號",
                "shelter_tel": "039602350分機620",
                "animal_Variety": "混種狗"
            },
            {
                "animal_id": 248518,
                "animal_subid": "EAAAG1110329002",
                "animal_area_pkid": 9,
                "animal_shelter_pkid": 96,
                "animal_place": "苗栗縣生態保育教育中心(動物收容所)",
                "animal_kind": "狗",
                "animal_sex": "F",
                "animal_bodytype": "BIG",
                "animal_colour": "黑黃色",
                "animal_age": "",
                "animal_sterilization": "T",
                "animal_bacterin": "F",
                "animal_foundplace": "三義鄉廣盛村",
                "animal_title": "",
                "animal_status": "OPEN",
                "animal_remark": "",
                "animal_caption": "",
                "animal_opendate": "2022-03-29",
                "animal_closeddate": "2999-12-31",
                "animal_update": "2022/03/29",
                "animal_createtime": "2022/03/29",
                "shelter_name": "苗栗縣生態保育教育中心(動物收容所)",
                "album_file": "https://asms.coa.gov.tw/amlapp/upload/pic/0a31318e-212b-4458-aa3a-0f8fc0b3e843_org.jpg",
                "album_update": "",
                "cDate": "2022/03/29",
                "shelter_address": "苗栗縣銅鑼鄉朝陽村6鄰朝北55-1號(地圖：https://goo.gl/maps/Bd4sckpEPsrof7Qb8)",
                "shelter_tel": "037-558228",
                "animal_Variety": "混種狗"
            },
            {
                "animal_id": 248516,
                "animal_subid": "EAAAG1110329001",
                "animal_area_pkid": 9,
                "animal_shelter_pkid": 96,
                "animal_place": "苗栗縣生態保育教育中心(動物收容所)",
                "animal_kind": "狗",
                "animal_sex": "M",
                "animal_bodytype": "BIG",
                "animal_colour": "黃色",
                "animal_age": "",
                "animal_sterilization": "F",
                "animal_bacterin": "F",
                "animal_foundplace": "頭份市民族里",
                "animal_title": "",
                "animal_status": "OPEN",
                "animal_remark": "",
                "animal_caption": "",
                "animal_opendate": "2022-03-29",
                "animal_closeddate": "2999-12-31",
                "animal_update": "2022/03/29",
                "animal_createtime": "2022/03/29",
                "shelter_name": "苗栗縣生態保育教育中心(動物收容所)",
                "album_file": "https://asms.coa.gov.tw/amlapp/upload/pic/28c28970-2d3c-4809-bf06-879495ca95b6_org.jpg",
                "album_update": "",
                "cDate": "2022/03/29",
                "shelter_address": "苗栗縣銅鑼鄉朝陽村6鄰朝北55-1號(地圖：https://goo.gl/maps/Bd4sckpEPsrof7Qb8)",
                "shelter_tel": "037-558228",
                "animal_Variety": "混種狗"
            },
            {
                "animal_id": 248515,
                "animal_subid": "AAAHG1110329004",
                "animal_area_pkid": 3,
                "animal_shelter_pkid": 58,
                "animal_place": "新北市五股區公立動物之家",
                "animal_kind": "狗",
                "animal_sex": "F",
                "animal_bodytype": "MEDIUM",
                "animal_colour": "虎斑色",
                "animal_age": "",
                "animal_sterilization": "F",
                "animal_bacterin": "F",
                "animal_foundplace": "五工二路",
                "animal_title": "",
                "animal_status": "OPEN",
                "animal_remark": "",
                "animal_caption": "",
                "animal_opendate": "2022-03-29",
                "animal_closeddate": "2999-12-31",
                "animal_update": "2022/03/29",
                "animal_createtime": "2022/03/29",
                "shelter_name": "新北市五股區公立動物之家",
                "album_file": "https://asms.coa.gov.tw/amlapp/upload/pic/3c32c8c7-70eb-448d-80ae-602f45dd9d66_org.jpg",
                "album_update": "",
                "cDate": "2022/03/29",
                "shelter_address": "新北市五股區外寮路9-9號",
                "shelter_tel": "02-82925265",
                "animal_Variety": "混種狗"
            },
            ];
        this.sliceAnimalData(data);
        this.pageCount = this.animalData.length;
    },
    watch: {
        page: {
            handler(val) {
                this.$router.push({name: 'data', query: { page: val } });
            },
        },
    },
    computed: {
        pageAnimalData() {
            return this.animalData[this.$route.query.page - 1 || 0]; 
        },
    },
    methods: {
        sliceAnimalData(allAnimalData) {
            for (let i = 0; i < allAnimalData.length; i += this.productCountPerPage){
                const chunk  = allAnimalData.slice(i, i + this.productCountPerPage);
                this.animalData.push(chunk);
            }
        },
    },
    // mounted(){
    //     // this.$axios.get('/api/animal')
    //     axios.get('/api/animl')
    //     .then(res => console.log(res))
    //     .then(console.log(this.data))
    // }
};

</script>

<style scoped>
@font-face {
    font-family: Cubic_11;
    src: url("@/vuesImages/Cubic_11.woff") format("woff");
}

.body {
    /* font-family: "Cubic_11"; */
    height: 100%;
    margin-top: 0;
    /* background: #fffaf4; */
}
.slideshow {
    border-radius: 10px 10px 10px 10px / 10px 10px 10px 10px;
    box-shadow: 0px 5px 5px 5px rgba(0, 0, 0, 0.2);
    margin-top: 15vh;
}
.search {
    margin-top: 7%;
}
.iWantToSearch {
    display: inline-block;
}
.search img {
    width: 5%;
    margin-top: -2%;
    margin-right: 1%;
}
select {
    /* Reset Select */
    appearance: none;
    outline: 0;
    border: 1;
    box-shadow: none;
    /* Personalize */
    flex: 1;
    padding: 0 1em;
    color: rgba(2, 107, 72, 0.425);
    background-color: var(--darkgray);
    background-image: none;
    cursor: pointer;
}
/* Remove IE arrow */
select::-ms-expand {
    display: none;
}
/* Custom Select wrapper */
.select {
    position: relative;
    display: flex;
    width: 15em;
    height: 3em;
    border-radius: 0.25em;
    overflow: hidden;
    margin-right: 2%;
    /* padding: 3px; */
    /* margin: 30px; */
}
/* Arrow */
.select::after {
    content: "\25BC";
    position: absolute;
    top: 0;
    right: 0;
    padding: 1em;
    background-color: #4a6886;
    transition: 0.25s all ease;
    pointer-events: none;
}
/* Transition */
.select:hover::after {
    color: #0f0;
}
.selectBox {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 4%;
    margin-bottom: 4%;
}
.button {
    align-items: center;
    appearance: none;
    background-color: #fcfcfd;
    border-radius: 4px;
    border-width: 0;
    box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,
        rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
    box-sizing: border-box;
    color: #36395a;
    cursor: pointer;
    display: inline-flex;
    font-family: "JetBrains Mono", monospace;
    height: 50px;
    width: 90px;
    justify-content: center;
    line-height: 1;
    list-style: none;
    overflow: hidden;
    padding-left: 16px;
    padding-right: 16px;
    position: relative;
    text-align: left;
    text-decoration: none;
    transition: box-shadow 0.15s, transform 0.15s;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    white-space: nowrap;
    will-change: box-shadow, transform;
    font-size: 18px;
    /* margin-left: -100px;
    margin-right: 20vw; */
}

.button:focus {
    box-shadow: #d6d6e7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px,
        rgba(140, 136, 148, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
}

.button:hover {
    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px,
        rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
    transform: translateY(-2px);
}

.button:active {
    box-shadow: #d6d6e7 0 3px 7px inset;
    transform: translateY(2px);
}
.infomation {
    display: flex;
    /* flex-direction: row; */
    width: 45vw;
    height: 40vh;
    background: #eac568a1;
    margin-top: 10%;
    border-radius: 10px 10px 10px 10px / 10px 10px 10px 10px;
}
.infomation img {
    width: 45vw;
    height: 40vh;
    margin-left: -20vw;
}
.infoLogo img {
    width: 10vw;
    height: 10vh;
    margin-left: 1%;
    padding-left: 50%;
}
.text {
    display: flex;
    align-items: center;
    justify-content: left;
}
.img {
    display: flex;
    justify-content: right;
}
.img img {
    width: 3vw;
}
.textBox {
    margin-right: 6%;
}
.button {
    display: flex;
    justify-content: center;
    margin-left: 135px;
}
.typesetting {
    /* display: flex; */
    /* flex-direction: row; */
    display: inline-block;
}
.pagination {
    display: flex;
    justify-content: center;   
}
.page-link,.page-link:hover,.page-link:focus {
  color: black;
  cursor: pointer;
}

.page-link:focus {
  box-shadow: none;
}

.page-item.active .page-link {
  background: gray;
  border-color: gray;
}
</style>