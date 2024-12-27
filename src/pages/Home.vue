<template>
    <div>
        <div class="header">
            <div class="overlay">
                <h1>{{ $t('startRecord1') }}</h1>
                <h1>{{ startRecord2 }}</h1>
            </div>
            <br>
            <div class="download-container">
                <button class="download-button" @click="downloadApp">{{ $t('download') }}</button>
            </div>
        </div>
        <div class="gallery-container">
            <div class="image-item" v-for="(image, index) in images" :key="index">
                <img :src="`/assets/${image.src}`" :alt="image.alt" class="image" />
                <span class="description">{{ image.description }}</span>
            </div>
        </div>
        <footer>
            <p>{{ copyRight }}</p>
        </footer>
    </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const appName = t('name');
const startRecord2 = t('startRecord2', { name: appName });
const copyRight = t('copyRight', { name: appName });

const images = [
        { src: "en1.png", alt: "图片1", description: t('image1Des') },
        { src: "en2.png", alt: "图片2", description: t('image2Des') },
        { src: "en3.png", alt: "图片3", description: t('image3Des') },
        { src: "en4.png", alt: "图片2", description: t('image4Des') },
        { src: "en5.png", alt: "图片3", description: t('image5Des') }
      ]

function downloadApp() {
    const url = "https://apps.apple.com/app/id6739777806";
    window.open(url, "_blank");
}

</script>

<style scoped>
  .header {
    background: rgba(108, 169, 255, 0.8); /* 深绿色背景 */
    color: #fff;
    margin: 0;
    text-align: center;
    padding: 40px 15px;
    position: relative;
  }

  .header .overlay {
    max-width: 800px;
    margin: 0 auto;
  }

  .header h1 {
    font-size: 2.0rem;
    margin-bottom: 15px;
  }

  .download-container {
  display: flex;
  justify-content: center;
}

.download-button {
  padding: 20px 50px; /* 按钮尺寸加大 */
  font-size: 24px; /* 字体更大 */
  font-weight: bold;
  color: #fff; /* 按钮文字颜色 */
  background: linear-gradient(90deg, #007bff, #00d1ff); /* 按钮渐变背景 */
  border: none;
  border-radius: 40px; /* 按钮圆角更大 */
  cursor: pointer;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3); /* 阴影更明显 */
  transition: all 0.3s ease; /* 动画过渡效果 */
}

.download-button:hover {
  transform: translateY(-5px); /* 鼠标悬浮时向上移动更多 */
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.4); /* 增加阴影 */
}

.download-button:active {
  transform: translateY(0); /* 点击时复位 */
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3); /* 阴影复位 */
}

  footer {
    background: #f1f1f1;
    text-align: center;
    padding: 10px;
    color: #777;
  }

  .gallery-container {
  display: flex;
  flex-direction: column; /* 每行显示一个图片和描述 */
  align-items: center; /* 图片及描述水平居中 */
  justify-content: center; /* 可选：整体垂直居中 */
  gap: 20px; /* 每行之间的间距 */
  padding: 20px; /* 外边距 */
}

/* 单个图片项容器：图片和描述在一行 */
.image-item {
  display: flex; /* Flex 布局 */
  flex-direction: row; /* 图片和描述横向排列 */
  align-items: flex-start; /* 对齐到顶部 */
  width: 100%; /* 确保每个项宽度占满整行 */
  max-width: 600px; /* 设置最大宽度，避免过宽 */
  gap: 15px; /* 图片和描述之间的间距 */
}

/* 图片样式 */
.image {
  width: 200px; /* 设置图片宽度 */
  height: auto; /* 设置图片高度，保持图片大小一致 */
  object-fit: cover; /* 保持图片比例裁剪，避免拉伸 */
  border-radius: 8px; /* 可选：圆角效果 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* 可选：图片阴影 */
}

/* 描述样式 */
.description {
  font-size: 16px; /* 字体大小 */
  color: #333; /* 描述文字颜色 */
  line-height: 1.5; /* 行间距 */
  max-width: 400px; /* 可选：限制描述最大宽度 */
  word-wrap: break-word; /* 自动换行 */
  text-align: left;
}


</style>