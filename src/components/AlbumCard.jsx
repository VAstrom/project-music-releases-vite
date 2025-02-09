import { AlbumCover } from "./AlbumCover.jsx";
import { AlbumName } from "./AlbumName.jsx";
import { ArtistName } from "./ArtistName.jsx";

export const AlbumCard = ({ musicData }) => {
    let albumData = musicData.albums.items;

    return (
        <>
            {/* In React, when you use {} to wrap code inside JSX (like {albumData.map()...), it signifies that you're inserting JavaScript logic or expressions within the JSX. Everything inside these braces is treated as JavaScript code, allowing you to perform computations, access variables, or call functions. If you want to perform multiple operations or return multiple statements, you would use curly braces to define a block of code: */}
            {albumData.map((album) => {
                return (
                    // In React, the key prop is a special attribute that you need to include when rendering a list of elements using map() to help React identify which items have changed, been added, or been removed. The key prop should be unique for each element in the list.
                    // You can technically place the key prop on any component or HTML element, but it's a best practice to place it on the outermost element being generated by map() to uniquely identify each item in the list.
                    <div className="albumCardWrapper" key={album.id}>
                        <AlbumCover albumCoverItem={album} />
                        <AlbumName albumNameItem={album} />
                        <ArtistName artistNameItem={album} />
                    </div>
                );
            })}
        </>
    );
};

