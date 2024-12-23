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
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis corporis tenetur, temporibus fugiat consequuntur quaerat impedit quidem laudantium eius, porro labore voluptate est veritatis saepe, ea magnam inventore. Recusandae, commodi neque ratione voluptas nulla tempore a quis aut doloribus et numquam optio. Odit nobis qui saepe dolor modi necessitatibus hic totam autem officiis, natus culpa iste cupiditate ad suscipit eveniet possimus illum eos quia architecto magnam deserunt dolores temporibus nemo earum. Facere laborum cumque voluptates earum ea totam delectus iste incidunt, alias ipsa quas nemo perspiciatis quo veritatis quasi unde praesentium eveniet eos tenetur corporis provident distinctio cupiditate. Suscipit cupiditate eligendi nesciunt adipisci veritatis facere quasi quam temporibus delectus commodi tempore tempora animi esse officia nam sequi recusandae vitae, consequuntur cumque dicta excepturi aliquid corrupti. Dolore non voluptatum, obcaecati quos molestiae earum aliquid ad perferendis a in repellat consectetur nemo maiores explicabo nesciunt veniam perspiciatis id odio commodi quibusdam beatae. Ut, consectetur earum est numquam sunt obcaecati corporis asperiores commodi distinctio iure sapiente id consequuntur exercitationem culpa dolore dolorem vel maiores. Optio placeat hic illum iusto fuga eveniet explicabo perferendis esse commodi dicta excepturi nobis ad, deleniti at sequi delectus quam voluptates nesciunt qui quidem laboriosam minus? Laborum unde, iste saepe placeat qui eaque corrupti nam? Alias aut, voluptatem repellat animi harum recusandae quam similique quis ex ad qui suscipit ducimus doloremque esse tempore. Veritatis quo a distinctio, harum quasi ullam eos sed repellat, impedit id odio adipisci, vero cupiditate! Quo quasi libero assumenda natus accusantium? Nesciunt possimus cum quibusdam necessitatibus similique officia dignissimos at deserunt. Magni dolores et eius fugit culpa adipisci pariatur. Iusto labore laboriosam odit ipsam neque, magnam dolores eveniet eum itaque beatae ea quisquam natus inventore molestiae culpa! Ipsum praesentium ducimus impedit totam sint vitae non soluta, ullam recusandae enim, dolores amet quisquam laboriosam cumque illo, tempore necessitatibus. Atque nobis, deserunt fugiat voluptates provident accusamus omnis? Autem, sapiente nam labore voluptate tempore accusamus officiis assumenda. Quis, amet ipsa, quam consequuntur laboriosam id et ipsum iste quidem dicta possimus suscipit at eum dolores tempore nemo! Rem explicabo molestiae ipsa vitae deleniti tenetur illo voluptatem placeat consequuntur corporis consectetur animi doloremque aperiam sunt quaerat officia exercitationem mollitia perferendis soluta aliquid, harum iusto omnis eius officiis. Voluptates necessitatibus odit adipisci alias aliquid cum harum ea consequatur autem beatae quidem fugiat a quasi minus ullam numquam sunt laborum provident, aspernatur enim obcaecati quo deserunt quisquam. Inventore sint, voluptatibus adipisci aperiam ipsam nesciunt temporibus eos omnis unde rerum sapiente quia. Impedit maxime cumque, repellendus ut perferendis asperiores quisquam minima! Impedit itaque obcaecati aut modi consequuntur minima magni pariatur, commodi accusantium voluptatem delectus, deserunt nam deleniti iure sunt ipsam aliquid nulla quia ab mollitia ea illum optio esse. Repudiandae doloribus facere recusandae quisquam optio sed quidem voluptatum officiis, eius accusantium maiores deserunt error tempore similique distinctio nisi consectetur, modi deleniti suscipit. Eius labore culpa ducimus ullam cupiditate at illo officia modi laboriosam distinctio non delectus saepe reiciendis aliquam optio eaque iste rerum quam, tempora mollitia? Quis aliquam illo tempore nostrum distinctio veniam porro est fugiat commodi deserunt tenetur, reprehenderit inventore rem odio, aut, sunt quibusdam voluptatem non labore tempora unde eius! Velit nihil sapiente tempore veniam. Praesentium obcaecati nostrum illum sunt assumenda sed magnam veritatis, adipisci quo. Explicabo voluptates quaerat debitis quas. Voluptas perspiciatis perferendis suscipit doloremque mollitia, ut eveniet facere odit ad amet impedit numquam? Sint repudiandae dolorum fugit labore unde nulla, laudantium obcaecati iste, temporibus corrupti totam omnis facilis distinctio. Dolor dolorum labore magnam deleniti maiores pariatur sunt in sapiente hic veritatis ipsa error, ex quam incidunt vel! Dolore delectus iure dolores porro esse sint perferendis commodi illo placeat at, vero vel cumque aut neque dolorem rem similique. Eius vero, expedita a beatae doloribus reiciendis quas culpa, perspiciatis incidunt saepe nostrum consequatur molestiae illo sunt obcaecati, qui ipsam ducimus aliquid repellat mollitia in minima accusantium porro. A provident quae aperiam architecto adipisci dolorem, tempore itaque cum, mollitia blanditiis facere at rerum optio, possimus sed quod officia ab. Fugiat aliquam non dolor repellat facere atque dolorum ut asperiores corporis voluptas sit, quasi distinctio temporibus vel qui mollitia ipsum eligendi quod nostrum nulla consequatur alias eveniet fugit itaque? Exercitationem inventore laboriosam, et minus asperiores voluptatem optio iste, voluptatum dolore placeat illo! Eligendi exercitationem itaque et ea saepe reprehenderit inventore, sapiente, alias debitis fuga ex tenetur corrupti non quae quam quaerat, commodi sint. Aut hic cum sit, soluta porro eligendi quisquam nobis dolorem libero tempore voluptatum sed consequatur in itaque earum. Doloribus soluta cum ullam unde magnam voluptates. Corrupti ipsum perferendis deleniti necessitatibus neque optio eos exercitationem rerum ducimus debitis inventore ipsa, reiciendis facere voluptates aspernatur adipisci facilis ea nobis doloribus officiis veniam dolor, quae voluptatum consequuntur. Nihil cum facere, omnis distinctio consequatur deserunt ipsa alias quia, molestias harum illo accusamus mollitia iste? Dicta earum assumenda nesciunt. Laboriosam facere quam iure dicta sapiente eum minus quaerat dolore totam, inventore labore incidunt explicabo fuga. Animi recusandae tempora, quae impedit quod aliquam, nobis, maxime aliquid quaerat repudiandae blanditiis. Laborum magni ullam rem iusto alias, provident consequatur esse dignissimos distinctio vero deserunt debitis reiciendis quo velit eos architecto, suscipit, mollitia odit! Nulla natus nostrum cupiditate nobis at consequatur dolores necessitatibus facilis temporibus veritatis, minima molestiae quae. Labore fugiat ut, laudantium dignissimos saepe minus. Id doloremque, tempore ipsa neque mollitia est distinctio a eaque velit libero dicta officia officiis, autem consequuntur repudiandae at optio! In adipisci vel error tempore dolor. Illo quasi ipsum impedit repellat est aliquid! At culpa similique ex rerum dolor tenetur, non vero repudiandae illo quae? Nobis iure enim praesentium quam mollitia ea excepturi aperiam alias fugit ullam, omnis quibusdam facere delectus possimus optio laboriosam sint reprehenderit aliquam. Nisi quia velit similique repellendus laborum voluptatem dolorem incidunt illum, eaque, officiis delectus, praesentium culpa odit. Architecto alias obcaecati magni dolores velit quos aliquid rerum aliquam? Eius explicabo natus fugiat, optio deserunt, dignissimos assumenda iure, exercitationem quos itaque consequuntur magni odio nulla ea fugit pariatur velit. Dolore incidunt iure expedita adipisci ipsam quo dolores, officiis, esse fugiat similique quibusdam corrupti omnis at totam ducimus possimus. Ducimus!
      </div>
    </section>
  );
};

export default FullArticle;
