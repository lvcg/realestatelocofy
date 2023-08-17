const PropertyCard = ({
 imgUrl, name, price
}) => {
  const card1style = useMemo(() => {
    return {
      width: propWidth,
      flex: propFlex

    };
  });





  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {/* PropertyCard components */}
    <PropertyCard
      imageDimensions="/unsplashrlwe8f8anoc@2x.png"
      imageDimensionIds="/car.svg"
      imageDimensionValues="/bathtub.svg"
      imageDimensionIdsAndValue="/arrowsout.svg"
      imageDimensionIdsAndValue2="/ellipse-1@2x.png"
      imageDimensionIdsAndValue3="/sharenetwork.svg"
      imageDimensionIdsAndValue4="/heart.svg"
      imageDimensionIdsAndValue5="/plus.svg"
    />
    <PropertyCard
      imageDimensions="/unsplashrlwe8f8anoc1@2x.png"
      imageDimensionIds="/car1.svg"
      imageDimensionValues="/bathtub1.svg"
      imageDimensionIdsAndValue="/arrowsout.svg"
      imageDimensionIdsAndValue2="/ellipse-1@2x.png"
      imageDimensionIdsAndValue3="/sharenetwork1.svg"
      imageDimensionIdsAndValue4="/heart1.svg"
      imageDimensionIdsAndValue5="/plus1.svg"
    />
    <PropertyCard
      imageDimensions="/unsplashrlwe8f8anoc2@2x.png"
      imageDimensionIds="/car2.svg"
      imageDimensionValues="/bathtub2.svg"
      imageDimensionIdsAndValue="/arrowsout.svg"
      imageDimensionIdsAndValue2="/ellipse-1@2x.png"
      imageDimensionIdsAndValue3="/sharenetwork.svg"
      imageDimensionIdsAndValue4="/heart.svg"
      imageDimensionIdsAndValue5="/plus.svg"
    />
    <PropertyCard
      imageDimensions="/unsplashrlwe8f8anoc3@2x.png"
      imageDimensionIds="/car1.svg"
      imageDimensionValues="/bathtub1.svg"
      imageDimensionIdsAndValue="/arrowsout.svg"
      imageDimensionIdsAndValue2="/ellipse-1@2x.png"
      imageDimensionIdsAndValue3="/sharenetwork2.svg"
      imageDimensionIdsAndValue4="/heart1.svg"
      imageDimensionIdsAndValue5="/plus2.svg"
    />
    <PropertyCard
      imageDimensions="/unsplashrlwe8f8anoc@2x.png"
      imageDimensionIds="/car.svg"
      imageDimensionValues="/bathtub.svg"
      imageDimensionIdsAndValue="/arrowsout.svg"
      imageDimensionIdsAndValue2="/ellipse-1@2x.png"
      imageDimensionIdsAndValue3="/sharenetwork2.svg"
      imageDimensionIdsAndValue4="/heart2.svg"
      imageDimensionIdsAndValue5="/plus3.svg"
    />
    <PropertyCard
      imageDimensions="/unsplashrlwe8f8anoc4@2x.png"
      imageDimensionIds="/car3.svg"
      imageDimensionValues="/bathtub3.svg"
      imageDimensionIdsAndValue="/arrowsout1.svg"
      imageDimensionIdsAndValue2="/ellipse-11@2x.png"
      imageDimensionIdsAndValue3="/sharenetwork3.svg"
      imageDimensionIdsAndValue4="/heart3.svg"
      imageDimensionIdsAndValue5="/plus4.svg"
    />
    <PropertyCard
      imageDimensions="/unsplashrlwe8f8anoc5@2x.png"
      imageDimensionIds="/car4.svg"
      imageDimensionValues="/bathtub4.svg"
      imageDimensionIdsAndValue="/arrowsout1.svg"
      imageDimensionIdsAndValue2="/ellipse-11@2x.png"
      imageDimensionIdsAndValue3="/sharenetwork4.svg"
      imageDimensionIdsAndValue4="/heart4.svg"
      imageDimensionIdsAndValue5="/plus5.svg"
    />
    <PropertyCard
      imageDimensions="/unsplashrlwe8f8anoc6@2x.png"
      imageDimensionIds="/car3.svg"
      imageDimensionValues="/bathtub3.svg"
      imageDimensionIdsAndValue="/arrowsout1.svg"
      imageDimensionIdsAndValue2="/ellipse-11@2x.png"
      imageDimensionIdsAndValue3="/sharenetwork5.svg"
      imageDimensionIdsAndValue4="/heart3.svg"
      imageDimensionIdsAndValue5="/plus6.svg"
    />
  </div>
  );
};

export default PropertyCard;
