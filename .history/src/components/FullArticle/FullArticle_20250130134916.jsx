// import { Flex } from 'antd';
import { useEffect } from 'react';
import { useParams } from 'react-router';

// import { Tags } from '../Tags/Tags.jsx';
// import DeleteArticleModalWindow from '../DeleteArticleModalWindow/DeleteArticleModalWindow.jsx';
import store from '../../redux/store.js';
import { useGetParticularArticleQuery } from '../../AppAPI.js';
import * as actions from '../../redux/actions.js';

import classes from './FullArticle.module.scss';

const FullArticle = () => {
  const { slug } = useParams();
  const { data: article, error: fetchingError, isLoading: loadingArticle } = useGetParticularArticleQuery();
  console.log(slug);
  // const AUTHORIZED = 0;

  useEffect(() => {
    store.dispatch(actions.SET_ARTICLES_DATA(article));
    console.log('article: ', article);
  }, [result, currentPage]);

  return (
    <section className={classes.fullPost}>
      <p>Я работаю</p>
      {/* <div className={classes.postInfo}>
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
        {AUTHORIZED === 1 && (
          <div style={{ display: 'flex', gap: '12px' }}>
            <span className={classes.fullArticleRedButton}>Delete</span>
            <DeleteArticleModalWindow />
            <span className={classes.fullArticleGreenButton}>Edit</span>
          </div>
        )}
      </div>
      <div className={classes.postText}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quidem ducimus impedit magnam corporis quia
        nisi dignissimos, a tempora blanditiis facilis minima consequatur labore officia iste ad voluptas eveniet animi,
        et deserunt modi? Modi ad quo, consectetur quidem dolorum adipisci? Dolorem voluptate veniam recusandae deleniti
        iusto maxime minus voluptatibus. Tempore id consectetur, necessitatibus neque voluptatem molestias soluta
        maiores aliquam! Odio qui tenetur dolores laborum ducimus ullam commodi quae provident minima in aut, blanditiis
        quas recusandae expedita, quaerat molestias cum dolorem nostrum, odit libero velit architecto ea quod fugit?
        Reiciendis placeat eligendi, illo amet eaque officiis similique, modi velit commodi sit labore tenetur
        reprehenderit totam earum facere maiores voluptatum incidunt, perferendis sequi delectus nesciunt? Dolorem,
        similique inventore? Nostrum pariatur cum officiis laudantium rerum dolores non repudiandae, voluptates ab
        quaerat officia impedit nisi. Dolor deleniti assumenda quibusdam et ut recusandae, ratione dolorum
        necessitatibus deserunt expedita porro vel veritatis ab natus voluptate atque? Et a laboriosam id suscipit
        maiores vero maxime cum porro corporis placeat, quaerat iste assumenda obcaecati nesciunt illo, rerum
        dignissimos accusamus blanditiis itaque recusandae rem sequi fugiat omnis tenetur. Pariatur necessitatibus atque
        suscipit dolore explicabo expedita, hic, omnis impedit laboriosam aut, ut veritatis voluptatibus optio sequi
        veniam cum facilis voluptates deserunt? Optio odio, aperiam ex atque placeat nihil eius enim voluptates dolore
        veniam a perspiciatis. Quia aperiam eaque nostrum sunt, minus qui amet, recusandae laudantium eum cumque
        adipisci repudiandae tempora repellendus quod mollitia quis quae. Id perspiciatis quidem architecto sunt iure,
        autem eos commodi. Distinctio illum consequatur sed, laudantium tempora aspernatur vitae numquam unde laboriosam
        iusto fuga totam sit aliquid repellendus praesentium recusandae in obcaecati illo asperiores aliquam ipsa. Ipsum
        ut, dicta libero recusandae reprehenderit sequi expedita inventore dolore aperiam dolores doloremque? Unde
        officiis at et nobis, doloremque cumque quisquam ab a tempore, nostrum quasi ipsum, voluptates ratione hic sed!
      </div> */}
    </section>
  );
};

export default FullArticle;
