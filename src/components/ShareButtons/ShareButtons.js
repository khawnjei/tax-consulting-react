import {
    FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, PinterestShareButton, PinterestIcon, LinkedinShareButton, LinkedinIcon, TelegramIcon, TelegramShareButton

} from "react-share";
import authorImage from '../../assets/images/news-details/author.jpg';

const ShareButtons = () => {
    return (
        <ul className="icons">
            <li>
                <FacebookShareButton
                    url={String(window.location)}
                    title={`Share ${String(window.location)}`}
                >
                    <FacebookIcon
                        size={18}
                    />
                </FacebookShareButton>
            </li>
            <li>
                <TwitterShareButton
                    url={String(window.location)}
                >
                    <TwitterIcon
                        size={18}
                    />
                </TwitterShareButton>
            </li>
            <li>
                <PinterestShareButton
                    url={`${String(window.location)}`}
                    media={`${authorImage}`}
                >
                    <PinterestIcon
                        size={18}
                    />
                </PinterestShareButton>

            </li>
            <li>
                <LinkedinShareButton url={`${String(window.location)}`}>
                    <LinkedinIcon size={18} />
                </LinkedinShareButton>
            </li>
            <li>
                <TelegramShareButton>
                    <TelegramIcon size={18} />
                </TelegramShareButton>
            </li>
        </ul>
    );
};

export default ShareButtons;