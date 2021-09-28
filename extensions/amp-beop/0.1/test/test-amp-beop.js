import '../amp-beop';
import {beop} from '#3p/beop';

describes.realWin(
  'amp-beop',
  {
    amp: {
      extensions: ['amp-beop'],
      canonicalUrl: 'https://foo.bar/baz',
    },
  },
  (env) => {
    const accountId = '589446dd42ee0d6fdd9c3dfd';
    const contentId = '5a703a2f46e0fb00016d51b3';
    let win, doc;

    beforeEach(() => {
      win = env.win;
      doc = win.document;
    });

    function getAmpBeOp(accountId) {
      const ampBeOp = doc.createElement('amp-beop');
      ampBeOp.setAttribute('data-account', accountId);
      ampBeOp.setAttribute('data-content', contentId);
      ampBeOp.setAttribute('width', '111');
      ampBeOp.setAttribute('height', '222');
      doc.body.appendChild(ampBeOp);
      return ampBeOp
        .buildInternal()
        .then(() => ampBeOp.layoutCallback())
        .then(() => ampBeOp);
    }

    it('renders iframe in amp-beop', () => {
      return getAmpBeOp(accountId).then((ampBeOp) => {
        const iframe = ampBeOp.firstChild;
        expect(iframe).to.not.be.null;
        expect(iframe.tagName).to.equal('IFRAME');
        expect(iframe.getAttribute('width')).to.equal('111');
        expect(iframe.getAttribute('height')).to.equal('222');
      });
    });

    it('adds container element correctly', () => {
      const div = doc.createElement('div');
      div.setAttribute('id', 'c');
      doc.body.appendChild(div);
      win.context = {
        canonicalUrl: 'https://foo.bar/baz',
        tagName: 'AMP-BEOP',
      };

      beop(win, {
        account: accountId,
        content: contentId,
        width: 111,
        height: 222,
      });
      const content = doc.body.querySelector('.BeOpWidget');
      expect(content).not.to.be.undefined;
    });

    it('removes iframe after unlayoutCallback', async () => {
      const ampBeOp = await getAmpBeOp(accountId);
      const obj = await ampBeOp.getImpl();

      const iframe = ampBeOp.querySelector('iframe');
      expect(iframe).to.not.be.null;
      obj.unlayoutCallback();
      expect(ampBeOp.querySelector('iframe')).to.be.null;
      expect(obj.iframe_).to.be.null;
      expect(obj.unlayoutOnPause()).to.be.true;
    });
  }
);
