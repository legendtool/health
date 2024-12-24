<template>
    <div>
        <div class="header">
            <div class="overlay">
                <h1>{{ localizedGreeting }}</h1>
            </div>
        </div>
        <main class="container">
            <div class="card">
                <h2>常见问题</h2>
                <div class="qa-question">Q1. 自定义通知后怎么收不到通知</div>
                <div class="qa-answer">
                    1. 确保应用内自定的通知状态是否是打开的。
                    <br>
                    2. 坚持添加的通知是否开启的了重复提醒，如果没有选择重复日期，通知只会在设置的时间通知一次。
                    <br>
                    3. 在手机系统设置内检查通知权限，确保通知权限是开启状态。
                </div>
                <br>
                <div class="qa-question">Q2. 添加通知后怎么删除</div>
                <div class="qa-answer">
                    1. 在应用内长按要删除的通知项，点击删除。
                </div>
                <br>
                <div class="qa-question">Q3. 在数据统计页面怎么筛选数据</div>
                <div class="qa-answer">
                    1. 在图标下方，点按要筛选的项目，比如不想展示早上的数据，点按早上按钮就能隐藏早上的数据，再次点击展示。
                </div>
                <br>
                <div class="qa-question">Q4. 数据统计计量单位问题</div>
                <div class="qa-answer">
                    1. 在更多模块中可以设置计量单位，比如身高的计量单位cm或ft。
                </div>
            </div>
            <div class="card">
                <h2>意见与反馈</h2>
                <p>在使用本应用的过程中，您遇到的任何问题都可以与我们联系。如果您有好的建议与想法也可以随时与我们联系。我们将会仔细考虑您的建议并及时做出适当的调整与更改。</p>
            </div>
            <div class="card">
                <h2>联系我们</h2>
                <p>邮件地址: legendtools@hotmail.com</p>
            </div>
        </main>
        <footer>
            <p>{{ $t('copyRight') }}</p>
            <a href="https://health.gtoolssh.com/privacy">隐私政策</a>
        </footer>
    </div>
</template>

<script setup lang="ts">

import { useI18n } from 'vue-i18n';
const { t } = useI18n();
const appName = t('name');
const localizedGreeting = t('welcome', { name: appName });

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

  .container {
    max-width: 900px;
    margin: 20px auto;
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .card {
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
  }

  .card h2 {
    font-size: 1.5rem;
    color: #6CA9FF;
    border-bottom: 2px solid #6CA9FF;
    padding-bottom: 5px;
    margin-bottom: 15px;
    text-align: left;
  }

  .card p {
    margin-bottom: 15px;
    color: #333;
    text-align: left;
  }

  .qa-question {
      font-weight: bold;
      color: #333;
      padding: 10px;
      text-align: left;
    }

  .qa-answer {
      margin-top: 10px;
      padding: 10px;
      color: #333;
      border-left: 4px solid #007bff;
      border-radius: 4px;
      text-align: left;
    }

  footer {
    background: #f1f1f1;
    text-align: center;
    padding: 15px;
    color: #777;
  }

  footer a {
    color: #6CA9FF;
  }

</style>