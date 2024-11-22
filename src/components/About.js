import React, { useContext } from "react";
import { DescriptionContext } from "../App";
import { ToggleContext } from "../App";

function About() {
  const description = useContext(DescriptionContext);
  const isChecked = useContext(ToggleContext);

  return (
    <section id="about" className="title-left">
      <h2>{isChecked.isChecked ? "About Us" : "Über Uns"}</h2>
      <div>
        {/* {isChecked.isChecked ? (
          // ? <p>{description[0].descriptionEnglish}</p>
          // : <p>{description[0].descriptionGerman}</p>
          <p
            dangerouslySetInnerHTML={{
              __html: description[0].descriptionEnglish,
            }}
          />
        ) : (
          <p
            dangerouslySetInnerHTML={{
              __html: description[0].descriptionGerman,
            }}
          />
        )} */}
      </div>
      {/* <div>
      <p>
        Welcome to Eberharter Apart in Kaltenbach in the ZillertaL. Our
        comfortable and fully equipped 90m² apartment offers plenty of space for
        4-7 people seeking relaxing holidays.{" "}
      </p>
      <p>
        Many shops, restaurants and the supermarket in the centre of Kaltenbach
        can be reached from the Apart Eberharter after a 5-minute walk. The stop
        of the free ski bus that takes you to the resorts of Hochzillertal -
        Hochfügen and Spieljoch is just 50 metres away from your apartment. The
        Zillertal railway station that is popular among families with children
        is only 5 minutes away on foot.
      </p>
      <p>
        The apartment in the Aparthotel Wetscher offers 3 cosy bedrooms, a large
        bathroom with tub and shower as well as a separate toilet. Your spacious
        sunny balcony promises magnificent views of the surrounding alpine
        landscape in the Zillertal and of the Hochzillertal - Hochfügen skiing
        area. The cosy and spacious apartment kitchen is fully furnished and
        comes with satellite TV, radio, dishwasher, oven, microwave, coffee
        maker and freezer. The family apartment is equipped with cot and high
        chair for your children. You can also book another room on the second
        floor of our Wetscher apartment on top.
      </p>
      <p>
        Use our bread delivery service for your delicious breakfast to start a
        new active day.
      </p>
      <p>
        Store your sports equipment in our ski room with boot dryer and use the
        free Wi-Fi connection in our apartment Eberharter. You can best leave
        your mountain bike in our lockable garage.
      </p>
      <p>
        The garden with lawn offers plenty of space for your children to unwind
        and thanks to our BBQ area, you can treat your friends and family with
        self-grilled delicacies on warm summer evenings. Your host is a
        passionate hunter and can certainly contribute an exciting anecdote to a
        sociable evening. In winter, you can build a snowman in the garden and
        have a snowball match with your kids.
      </p>
      <p>
        With the top skiing resorts of Hochfügen-Hochzillertal and Zillertal
        Arena the Zillertal presents itself as a true winter sports paradise at
        its best. Endless slopes and highly modern lifts, the longest downhill
        runs in the Zillertal and fast-paced night tobogganing and night skiing
        offer winter fun for the whole family.
      </p>
      <p>
        In summer, the beautiful setting of the Zillertal offers a variety of
        romantic hiking and biking trails and a picturesque ride on the
        Zillertal Railway. A special highlight, the new Zillertal Spa is an
        exciting destination for the whole family that can be reached in just 5
        minutes from the apartment Eberharter by car.
      </p>
      <p>
        Your host, Michaela Eberharter looks forward to soon welcoming you to
        the beautiful Kaltenbach in the Zillertal.
      </p>
      </div> */}
    </section>
  );
}

export default About;
