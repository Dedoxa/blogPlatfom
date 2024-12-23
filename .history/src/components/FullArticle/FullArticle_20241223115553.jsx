import { Flex } from 'antd';

import { Tags } from '../Tags/Tags.jsx';

import classes from './FullArticle.module.scss';

const FullArticle = () => {
  return (
    <section className={classes.fullPost}>
      <div className={classes.postInfo}>
        <div>
          <div className={classes.titleAndLikesContainer}>
            <span className={classes.articleTitle}>Some article title</span>
            <img src="../../../public/img/LikeSymbol.svg" alt="LikeSymbol" style={{ marginRight: '4px' }} />
            <span>12</span>
          </div>
          <div className={classes.tagsContainer}>
            <Flex wrap>
              <Tags ids={['Tag1', 'Tag2', 'Tag3']} />
            </Flex>
          </div>
        </div>
        <div className={classes.authorInfo}>
          <div className={classes.NameAndDateContainer}>
            <span className={classes.Name}>John Doe</span>
            <span className={classes.Date}>March 5, 2020</span>
          </div>
          <img src="../../../public/img/John Doe.png" height={46} width={46} alt="author Image" />
        </div>
      </div>
      <div className={classes.postContent}>
        <div className={classes.postDescription}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. .{' '}
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <span className={classes.fullArticleRedButton}>Delete</span>
          <span className={classes.fullArticleGreenButton}>Edit</span>
        </div>
      </div>
      <div className={classes.postText}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam at veniam laborum. Eveniet, repellat. Consectetur illum enim modi quas ipsa facere eaque et ratione doloremque laboriosam pariatur quae vel nisi tempora, necessitatibus recusandae ad consequatur dolorum placeat atque nesciunt nemo deleniti ea earum. Debitis vel maiores assumenda nesciunt voluptatem quisquam ab atque. Maxime quis iusto mollitia officiis fugit. Sunt reprehenderit minima tenetur, tempore libero blanditiis aliquid, ex nostrum laboriosam ullam mollitia nisi sint facere at alias ipsa voluptates nemo aperiam, voluptatibus fugiat magni perspiciatis consequuntur? Tempora sequi aspernatur ratione repellat, atque pariatur fugit ipsum optio eius ea ut molestias iure doloremque? Eaque quae possimus dignissimos, eum, molestias officia, enim impedit quas nisi vel expedita quibusdam accusamus voluptatum beatae distinctio quisquam dolor natus cum debitis molestiae sint ex placeat recusandae. Sequi cum at magni voluptas quasi, labore saepe fuga dignissimos voluptatem expedita eveniet nostrum illum inventore enim quibusdam quos aliquam, sint et repellendus ab neque maiores deserunt dolor? Sunt minima dolorum est doloremque nam ea qui obcaecati autem porro facilis ad necessitatibus dolores maiores error ducimus praesentium molestiae aspernatur eos, id cumque itaque nesciunt. Quod quidem corrupti consectetur sed rem tenetur eaque perferendis ut quaerat quasi quia deserunt ducimus, reprehenderit illum, minus omnis ex reiciendis, distinctio ad blanditiis. Perspiciatis, soluta vitae voluptate, dolor ut recusandae nihil iusto amet nam error ducimus repellat. Libero, mollitia incidunt facere labore numquam quasi eum atque quaerat earum consectetur iure magni, illum quos totam ipsa at odio perspiciatis ratione ex? Aliquam cumque veniam asperiores saepe a velit natus cupiditate numquam optio inventore omnis odit labore quis tenetur aliquid eius, dolorum hic commodi qui quam provident repellat. Iure beatae incidunt veniam molestiae nihil magnam aspernatur itaque labore obcaecati quidem quibusdam omnis optio exercitationem perspiciatis nisi, praesentium rem dignissimos dolorem, in vel asperiores recusandae hic? Dicta tempore, delectus fugiat minima deleniti, provident libero dolorum natus quas perspiciatis, tempora optio laborum cum necessitatibus. Deleniti quia tempore voluptate vel voluptatum corporis cupiditate a. Unde laudantium mollitia debitis dolores, iusto velit ea, incidunt veniam aspernatur enim distinctio reiciendis in ratione reprehenderit quaerat ut error est modi sed sit magni fuga, dolor recusandae. Ipsum odit voluptate dolorem natus ex fugiat excepturi, eius asperiores inventore quod commodi aliquam omnis laborum consequatur nihil similique earum dicta labore numquam ipsa repudiandae animi. Sit impedit, dolores facilis voluptatibus vel, nemo ut qui aspernatur veritatis iure, quasi explicabo exercitationem mollitia laudantium non. Reprehenderit, sit voluptatibus. Error quos deleniti cum iure quas, fugiat harum perferendis mollitia perspiciatis molestiae corrupti voluptatibus assumenda doloribus ratione! At quas quia voluptatem ipsam, sit reiciendis perferendis non eum repellat repudiandae amet dolor veniam illum! Obcaecati laborum, placeat doloribus neque totam sunt beatae ipsa voluptate, sint expedita ut eos. Ut sapiente alias rem sequi, culpa itaque inventore unde aliquam repudiandae voluptatem fugiat officia laboriosam reprehenderit vero commodi id consequuntur nesciunt? Aliquam laborum nam aliquid quasi, omnis mollitia iure ipsam impedit doloremque totam aperiam sequi culpa accusantium nobis ducimus, necessitatibus cupiditate atque harum! Cumque veniam voluptate aut asperiores. Repellat mollitia obcaecati molestias eaque? Saepe, nihil?
      </div>
    </section>
  );
};

export default FullArticle;
