import React from "react";

function About() {
  return (
    <article>
      <h2>关于</h2>
      <p>
        本项目是为了方便vTuber爱好者们浏览各自喜欢的vTuber的配信情报而开发的Web
        App。本站依赖YouTube
        API等相关技术，实时地、全自动地更新vTuber在YouTube上的配信预告。
      </p>
      <p>
        本站是<a href="https://github.com/aqua-crew-devs/aquarium">开源项目</a>
        。 如果在使用中发现了BUG，或者想要某些新的功能， 欢迎在
        <a href="https://github.com/aqua-crew-devs/aquarium/issues">
          Github Issue
        </a>
        中提出。
      </p>
      <h3>免责声明</h3>
      <p>
        由于本站大部分数据由机器自动获取，一般情况下没有人工介入，
        因此本站不对所展示的数据的正确性做任何保证。
      </p>
    </article>
  );
}

export default About;
