import noImage from '../assets/no-image.webp';

const getCroppedImageUrl = (url : string) =>{

  if( !url ) return noImage;


  const target = ('media/')
  //make the image sizes smaller by cropping them. The coprring path is already provided in the api
  const index = url.indexOf(target) + target.length;

    return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
}

export default getCroppedImageUrl;