import React from "react";

function renderMedia(media) {
    if (!media) return null;

    switch (media.__typename) {
        case "Photo":
            return <img src={media.image?.uri || media.photo_image?.uri} alt="Photo" className="card-img-top" />;
        case "Video":
            return (
                <a href={media.url} target="_blank" rel="noreferrer">
                    <img src={media.thumbnail} alt="Video preview" className="card-img-top" />
                </a>
            );
        case "GenericAttachmentMedia": // links, thumbnails
            return (
                <a href={media.url} target="_blank" rel="noreferrer">
                    <img src={media.thumbnail || media.image?.uri} alt="Attachment" className="card-img-top" />
                </a>
            );
        default:
            return null;
    }
};

function Post(props) {
    const post = props.post;
    return (
        <div className="col-12 mb-3">
            <div className="card shadow-sm">

                {/* Image if available */}
                {Array.isArray(post.media) &&
                    post.media.length > 0 &&
                    (
                        renderMedia(post.media[0])
                    )
                }

                <div className="card-body">

                    {/* Page name */}
                    <h6 className="card-title mb-1">
                        {post.pageName || "Facebook Post"}
                    </h6>

                    {/* Text content */}
                    <p className="card-text small mb-2">
                        {post.text?.slice(0, 200) || "No description available."}
                        {post.text?.length > 200 && "..."}
                    </p>

                    {/* Timestamp */}
                    {post.time && (
                        <p className="text-muted small mb-2">
                            Posted on: {new Date(post.time).toLocaleString()}
                        </p>
                    )}

                    {/* Read more button */}
                    <a
                        href={post.url}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <button className="btn btn-outline-secondary btn-sm">
                            Read More
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Post;