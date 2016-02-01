describe('ClickventureEditConfigPages', function () {

  var ClickventureEditConfigPages;
  var ClickventureEditNode;

  beforeEach(function () {
    module('bulbs.clickventure.edit.services.configPage');
    module('bulbs.clickventure.edit.services.node.factory');

    inject(function (_ClickventureEditConfigPages_, _ClickventureEditNode_) {
      ClickventureEditConfigPages = _ClickventureEditConfigPages_;
      ClickventureEditNode = _ClickventureEditNode_;
    });
  });

  describe('initialization', function () {

    it('should add a \'Settings\' page', function () {
      var configPage = ClickventureEditConfigPages.getConfigPage('settings');

      expect(configPage.title).to.equal('Settings');
      expect(configPage.order).to.equal(0);
      expect(configPage.statuses.length).to.equal(0);
    });

    it('should add a \'Copy\' page', function () {
      var configPage = ClickventureEditConfigPages.getConfigPage('copy');

      expect(configPage.title).to.equal('Copy');
      expect(configPage.order).to.equal(1);
      expect(configPage.statuses[0]).to.equal('Copy status not set');
      expect(configPage.statuses[configPage.statuses.length - 1])
        .to.equal('Copy ready');
    });

    it('should add a \'Image\' page', function () {
      var configPage = ClickventureEditConfigPages.getConfigPage('photo');

      expect(configPage.title).to.equal('Image');
      expect(configPage.order).to.equal(2);
      expect(configPage.statuses[0]).to.equal('Image status not set');
      expect(configPage.statuses[configPage.statuses.length - 1])
        .to.equal('Image ready');
    });
  });

  describe('public interface', function () {

    it('should have a method to get an ordered list of config pages', function () {
      var pages = ClickventureEditConfigPages.getOrderedConfigPages();

      expect(pages[0]).to.deep.equal(ClickventureEditConfigPages.getConfigPage('settings'));
      expect(pages[1]).to.deep.equal(ClickventureEditConfigPages.getConfigPage('copy'));
      expect(pages[2]).to.deep.equal(ClickventureEditConfigPages.getConfigPage('photo'));
    });

    describe('should have a method to set the status of a node that', function () {

      it('should work for a valid status', function () {
        var node = new ClickventureEditNode();
        var copy = ClickventureEditConfigPages.getConfigPage('copy');
        var status = copy.statuses[0];

        ClickventureEditConfigPages.setNodeStatus(node, status);

        expect(node.statuses.copy).to.equal(status);
      });

      it('should not work for an invalid status', function () {
        var node = new ClickventureEditNode();
        var status = 'Not a real status';

        ClickventureEditConfigPages.setNodeStatus(node, status);

        expect(node.statuses.copy).to.be.undefined;
      });
    });

    it('should have a method to check if a node has a particular status', function () {

      // TODO : add test code here
      throw new Error('Not implemented yet.');
    });

    it('should have a method to determine if a node is "complete"', function () {

      // TODO : add test code here
      throw new Error('Not implemented yet.');
    });

    it('should have a method to get the currently active config page', function () {

      // TODO : add test code here
      throw new Error('Not implemented yet.');
    });

    it('should have a method to get a single config page by key', function () {

      // TODO : add test code here
      throw new Error('Not implemented yet.');
    });

    it('should have a method to register a config page change handler', function () {

      // TODO : add test code here
      throw new Error('Not implemented yet.');
    });

    it('should have a method to change the active config page', function () {

      // TODO : add test code here
      throw new Error('Not implemented yet.');
    });
  });
});
