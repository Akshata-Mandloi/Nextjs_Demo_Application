import Image from "next/image";
import { useRouter } from "next/router";
import TreeImage from '../../public/tree.jpg'

const post = () => {
    const router = useRouter();
    // console.log("router", router)
    const { exam1 } = router.query
    return (
        <div>
            <p>post page :- {exam1}</p>
            <p>Trees are our best friends because they clean the air we breathe.
            Likewise, they also clean the water and soil and ultimately make the earth a better place.
            It is also a fact that people who live near trees are healthier, fit, and happier than
            people who do not.

            Moreover, it is our responsibility to look after our friends who serve us in many ways.
            Most importantly by saving plants, we are not doing any favor to plants but to ourselves
            only. Because trees and plants life does not depend on us but our lives depend on them.</p>
            <Image src={TreeImage} alt="background tree"/>
            <p>Trees are important to us in a lot of ways and we cannot ignore their importance.
            They are important because they give us fresh air to breathe, food to eat and
            shelter/shade from sunlight and rainfall. Besides this, there are many medicines in the
            market that are made up of trees extracts. Apart from this, there are plants and trees
            that have medicinal value.

            They bring peacefulness; create a pleasing and relaxing environment. Also, they help in
            reflecting the harmful rays of the sun and maintaining a balanced temperature. Besides,
            they also help in water conservation and preventing soil erosion. They also manage the
            ecosystem and from ancient times several varieties of plants are worshipped.</p>
        </div>
    );
};

export default post;