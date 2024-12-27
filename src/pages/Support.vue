<template>
    <div>
        <div class="header">
            <div class="overlay">
                <h1>{{ localizedGreeting }}</h1>
            </div>
        </div>
        <main class="container">
            <div class="card">
                <h2>{{ $t('question') }}</h2>
                <div class="qa-question">Q1. {{ $t('q1') }}</div>
                <div class="qa-answer">
                    1. {{ $t('a11') }}
                    <br>
                    2. {{ $t('a12') }}
                    <br>
                    3. {{ $t('a13') }}
                </div>
                <br>
                <div class="qa-question">Q2. {{ $t('q2') }}</div>
                <div class="qa-answer">
                    1. {{ $t('a21') }}
                </div>
                <br>
                <div class="qa-question">Q3. {{ $t('q3') }}</div>
                <div class="qa-answer">
                    1. {{ $t('a31') }}
                </div>
                <br>
                <div class="qa-question">Q4. {{ $t('q4') }}</div>
                <div class="qa-answer">
                    1. {{ $t('a41') }}
                </div>
            </div>
            <div class="card">
                <h2>{{ $t('feedBack') }}</h2>
                <p>{{ $t('feedBackDes') }}</p>
            </div>
            <div class="card">
                <h2>{{ $t('connectUS') }}</h2>
                <p>{{ $t('connectUSDes') }}</p>
            </div>
        </main>
        <footer>
            <p>{{ copyRight }}</p>
            <a href="https://health.gtoolssh.com/privacy">{{ $t('privacy') }}</a>
            <br>
        </footer>
    </div>
</template>

<script setup lang="ts">

import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const appName = t('name');
const localizedGreeting = t('welcome', { name: appName });
const copyRight = t('copyRight', { name: appName });

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