import { Injectable, Scope } from '@nestjs/common';
import { PagingDto } from 'src/shareDTO/Paging.dto';

class PagingConfig extends PagingDto {
  skip: number;
  regex: any;
}

export class GlobalUtility {
  static generateCitizenCode() {
    return `${new Date().getTime()}`;
  }
  static applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach((baseCtor) => {
      Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
        derivedCtor.prototype[name] = baseCtor.prototype[name];
      });
    });
  }
  static getPercentage(number: number, total: number) {
    return (100 * number) / total || 0;
  }

  static pagingWrapper(props: any): PagingConfig {
    return {
      skip: ((props?.pageId || 1) - 1) * (props?.eachPerPage || 12),
      regex: { $regex: props?.searchValue || '', $options: 'i' },
      pageId: props.pageId || 1,
      eachPerPage: props.eachPerPage || 12,
      ...props,
    };
  }

  static randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  static melliCodeValidator = (value: string) => {
    if (value?.length !== 10) {
      return false;
    } else {
      let L = value.length;

      if (L < 8 || parseInt(value, 10) == 0) return false;
      value = ('0000' + value).substr(L + 4 - 10);
      if (parseInt(value.substr(3, 6), 10) == 0) return false;
      let c = parseInt(value.substr(9, 1), 10);
      let s = 0;
      for (let i = 0; i < 9; i++)
        s += parseInt(value.substr(i, 1), 10) * (10 - i);
      s = s % 11;
      let isValid = (s < 2 && c === s) || (s >= 2 && c === 11 - s);
      if (isValid) {
        return true;
      }
      return false;
    }
  };
  static baseUserFilterQuery = (regex: any): Array<any> => {
    return [
      { email: regex },
      { firstName: regex },
      { lastName: regex },
      { melliCode: regex },
      { 'city.name': regex },
      { 'province.name': regex },
      { address: regex },
      { phone: regex },
      { tel: regex },
      { postalCode: regex },
      { shabaCode: regex },
    ];
  };
  static checkIsVideoType(mimetype: string) {
    let listOfVideoMimetypes: Array<string> = [
      'video/1d-interleaved-parityfec',
      'video/3gpp',
      'video/3gpp2',
      'video/3gpp-tt',
      'video/AV1',
      'video/BMPEG',
      'video/BT656',
      'video/CelB',
      'video/DV',
      'video/encaprtp',
      'video/example',
      'video/FFV1',
      'video/flexfec',
      'video/H261',
      'video/H263',
      'video/H263-1998',
      'video/H263-2000',
      'video/H264',
      'video/H264-RCDO',
      'video/H264-SVC',
      'video/H265',
      'video/H266',
      'video/iso.segment',
      'video/JPEG',
      'video/jpeg2000',
      'video/jxsv',
      'video/mj2',
      'video/MP1S',
      'video/MP2P',
      'video/MP2T',
      'video/mp4',
      'video/MP4V-ES',
      'video/MPV',
      'video/mpeg4-generic',
      'video/nv',
      'video/ogg',
      'video/parityfec',
      'video/pointer',
      'video/quicktime',
      'video/raptorfec',
      'video/raw',
      'video/rtp-enc-aescm128',
      'video/rtploopback',
      'video/rtx',
      'video/scip',
      'video/smpte291',
      'video/SMPTE292M',
      'video/ulpfec',
      'video/vc1',
      'video/vc2',
      'video/vnd.CCTV',
      'video/vnd.dece.hd',
      'video/vnd.dece.mobile',
      'video/vnd.dece.mp4',
      'video/vnd.dece.pd',
      'video/vnd.dece.sd',
      'video/vnd.dece.video',
      'video/vnd.directv.mpeg',
      'video/vnd.directv.mpeg-tts',
      'video/vnd.dlna.mpeg-tts',
      'video/vnd.dvb.file',
      'video/vnd.fvt',
      'video/vnd.hns.video',
      'video/vnd.iptvforum.1dparityfec-1010',
      'video/vnd.iptvforum.1dparityfec-2005',
      'video/vnd.iptvforum.2dparityfec-1010',
      'video/vnd.iptvforum.2dparityfec-2005',
      'video/vnd.iptvforum.ttsavc',
      'video/vnd.iptvforum.ttsmpeg2',
      'video/vnd.motorola.video',
      'video/vnd.motorola.videop',
      'video/vnd.mpegurl',
      'video/vnd.ms-playready.media.pyv',
      'video/vnd.nokia.interleaved-multimedia',
      'video/vnd.nokia.mp4vr',
      'video/vnd.nokia.videovoip',
      'video/vnd.objectvideo',
      'video/vnd.radgamettools.bink',
      'video/vnd.radgamettools.smacker',
      'video/vnd.sealed.mpeg1',
      'video/vnd.sealed.mpeg4',
      'video/vnd.sealed.swf',
      'video/vnd.sealedmedia.softseal.mov',
      'video/vnd.uvvu.mp4',
      'video/vnd.youtube.yt',
      'video/vnd.vivo',
      'video/VP8',
      'video/VP9',
    ];
    return listOfVideoMimetypes.includes(mimetype);
  }
}
