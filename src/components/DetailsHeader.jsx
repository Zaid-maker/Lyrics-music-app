const DetailsHeader = ({ artistId, artistData, songData }) => (
  <div className="relative w-full flex flex-col">
    <div className="w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28" />

    <div>
      <img
        src={
          artistId
            ? artistData?.articles[artistId].attributes?.artwork?.url
              .replace('{w}', '500')
              .replace('{h}', '500')
            : songData?.images?.coverart
        }
        alt="profile"
      />
    </div>
  </div>
);

export default DetailsHeader;
