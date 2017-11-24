'use strict';

module.exports = (it, expect, collect) => {
  // it('should convert the collection into a plain array', () => {
  //   const collectionArray = collect([1, 2, 3, 'b', 'c', 'ø']);
  //
  //   expect(collectionArray.toArray()).to.eql([1, 2, 3, 'b', 'c', 'ø']);
  //   expect(collectionArray.toArray()).to.eql(collectionArray.all());
  //
  //   const collectionObject = collect({
  //     name: 'Elon Musk',
  //     companies: [
  //       'Tesla',
  //       'Space X',
  //       'SolarCity',
  //     ],
  //   });
  //
  //   expect(collectionObject.toArray()).to.eql(['Elon Musk', ['Tesla', 'Space X', 'SolarCity']]);
  //   expect(collectionObject.toArray()).to.eql(collectionObject.values().all());
  // });

  it('should recursively cast collections to an array', () => {
    const collectionOfCollections = collect([
      collect([1, 2, 3]),
      collect([4, 5, 6, collect([7, 8, 9]), [10, 11, 12]]),
    ]);

    expect(collectionOfCollections.toArray()).to.eql([
      [
        1,
        2,
        3,
      ],
      [
        4,
        5,
        6,
        [
          7,
          8,
          9,
        ],
        [
          10,
          11,
          12,
        ],
      ],
    ]);
  });
};
