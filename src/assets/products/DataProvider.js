import React, {createContext, useState, useEffect} from 'react'

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [products, setProducts] = useState([
        {
            "_id":"1",
             "title": "SQUARE BANG UNICO KING GOLD",
             "images": [
                 "https://www.hublot.com/sites/default/files/styles/watch_item_desktop_1x_scale_no_crop_600_6000_/public/2022-03/square-bang-king-gold-42-mm-soldier-shot.png?itok=R0musM5R",
                 "https://www.hublot.com/sites/default/files/styles/global_laptop_1x/public/2022-03/square-bang-king-gold-42-mm-strap-shot.jpg?itok=baSTdqNQ",
                 "https://www.hublot.com/sites/default/files/styles/global_laptop_1x/public/2022-03/square-bang-king-gold-42-mm-close-up-shot.jpg?itok=Gs8mVTif",
                 "https://www.hublot.com/sites/default/files/styles/global_laptop_1x/public/2022-03/square-bang-king-gold-42-mm-ad-shot_1.jpg?itok=lNOA8ALx"
                 ],
             "description": "Movimiento: UNICO: 2 El calibre Unico 2 ha sido concebido para equipar cronógrafos más pequeños y abrir así el universo de Hublot a nuevos apasionados y apasionadas. De su hermano mayor, conserva su arquitectura única con doble embrague y rueda de pilares visibles en el lado de la esfera, así como su reserva de marcha de 72 horas. Pero, gracias a diversas optimizaciones técnicas, como la introducción de un nuevo sistema de cuerda automática más plano, ha perdido 1,3 mm de grosor. Materiales: KING GOLD: Maestro de la fusión y alquimista de los metales preciosos, Hublot ha desarrollado un nuevo color de oro que presenta un tono más cálido que el tradicional oro de 18 quilates 5N. En concreto, esta aleación exclusiva, bautizada como King Gold, contiene platino, y se presta perfectamente a todo tipo de operaciones de pulido y satinado. En los relojes Hublot, se combina con los materiales más inesperados, como la cerámica de alta tecnología, el caucho o el carbono.",
             "content": "ENCUENTRE LA CORREA PERFECTA PARA SU HUBLOT: Use nuestro configurador de correas personalizado.",
             "colors": ["red", "black", "teal"],
             "sizes": ["XL", "L", "M", "XM", "LX"],
             "price": 2000000,
             "count": 1
         },
         {
             "_id": "2",
             "title": "TOURBILLON SAMUEL ROSS",
             "images": [
                 "https://www.hublot.com/sites/default/files/styles/watch_item_desktop_1x_scale_no_crop_600_6000_/public/2022-04/Big-Bang-Tourbillon-Automatic-Samuel-Ross-%26-Associates-45-mm-soldier-shot.png?itok=XS-NJoeP",
                 "https://www.hublot.com/sites/default/files/styles/global_laptop_1x/public/2022-05/Big-Bang-Tourbillon-Automatic-Samuel-Ross-%26-Associates-45-mm-close-up-shot-4.jpg?itok=t5kMf_Gi",
                 "https://www.hublot.com/sites/default/files/styles/global_laptop_1x/public/2022-04/Big-Bang-Tourbillon-Automatic-Samuel-Ross-%26-Associates-45-mm-strap-shot.jpg?itok=2lG943bk",
                 "https://www.hublot.com/sites/default/files/styles/global_laptop_1x/public/2022-04/Big-Bang-Tourbillon-Automatic-Samuel-Ross-%26-Associates-45-mm-back-shot.jpg?itok=2FxiS7C3"
                 ],
             "description": "Movimiento: TOURBILLON AUTOMÁTICO: Este movimiento, diseñado y fabricado en la Manufactura, encarna el savoir-faire relojero de Hublot y se caracteriza por su sistema de cuerda automática sobre rodamientos, que proporciona una práctica reserva de marcha de tres días. El nuevo calibre, innovador también en términos de arquitectura, dispone de un microrrotor en el lado de la esfera y tres puentes de zafiro. Una novedosa composición y un desafío técnico que acentúan la espectacular estética del tourbillon y su diseño contemporáneo.",
             "content": "Materiales: TITANIO: El titanio se utiliza mucho en Hublot, especialmente debido a su ligereza. Cuenta con la relación resistencia/peso más elevada de todos los metales, lo que lo convierte en un material muy apreciado en aeronáutica. También destaca por su resistencia a la corrosión y su inercia al contacto con la piel. Hublot utiliza exclusivamente titanio de primerísima calidad, de grado 5, el más duro que existe. Tras pulirse, este material presenta un brillo metálico ligeramente azulado.",
             "colors": ["red", "black", "teal"],
             "sizes": ["XL", "L", "M", "XM", "LX"],
             "price": 10200000,
             "count": 1

         },
         {
             "_id": "3",
             "title": "ORIGINAL STEEL CERAMIC",
             "images": [
                "https://www.hublot.com/sites/default/files/styles/watch_item_desktop_1x_scale_no_crop_600_6000_/public/big-bang-original-steel-ceramic-44-mm-301.SB.131.RX-soldier-shot.png?itok=Y5za1Kq7",
                "https://www.hublot.com/sites/default/files/styles/global_laptop_1x/public/2022-03/big-bang-original-steel-ceramic-44-mm-PR-shot.jpg?itok=TClE3ZLq",
                "https://www.hublot.com/sites/default/files/styles/global_laptop_1x/public/2022-03/big-bang-original-steel-ceramic-44-mm-back-shot.jpg?itok=SnB2Y5bn",
                "https://www.hublot.com/sites/default/files/styles/global_laptop_1x/public/2022-03/big-bang-original-steel-ceramic-44-mm-side-shot.jpg?itok=hHMQ18fb"
                ],
             "description": "Movimiento: MOVIMIENTOS PIONEROS: El Arte de la Fusión se expresa hasta en el corazón del movimiento. Relojes sencillos con conceptos relojeros revolucionarios: Hublot ha creado toda una gama de movimientos manufactura únicos. La arquitectura inédita del cronógrafo automático Unico. La reserva de marcha exclusiva de los calibres Meca-10, Tourbillon y MP-11. El enfoque revolucionario del motor de 11 barriletes MP-05, dotado de 50 días de autonomía. En su Arte de la Fusión, Hublot lleva a cabo una simbiosis perfecta entre funcionalidad, arquitectura y diseño.",
             "content": "Materiales: ACERO: Hublot utiliza exclusivamente un acero inoxidable de grado médico, de tipo 316L, que combina hierro como metal de base, cromo para la resistencia a la corrosión, y níquel para una solidez mecánica óptima. Esta aleación estable y duradera soporta perfectamente las vicisitudes de la vida diaria. Desde el punto de vista estético, se decora fácilmente, ya sea a través del pulido o el satinado, lo que ofrece sutiles variaciones de acabados.",
             "colors": ["red", "black", "teal"],
             "sizes": ["XL", "L", "M", "XM", "LX"],
             "price": 10300000,
             "count": 1

         },
         {
             "_id": "4",
             "title": "TAKASHI MURAKAMI SAPPHIRE RAINBOW",
             "images": [
                 "https://www.hublot.com/sites/default/files/styles/watch_item_desktop_1x_scale_no_crop_600_6000_/public/2021-11/classic-fusion-takashi-murakami-sapphire-rainbow-soldier-shot.png?itok=Cy1p9P_w",
                 "https://www.hublot.com/sites/default/files/styles/global_laptop_1x/public/2021-12/classic-fusion-takashi-murakami-sapphire-rainbow-lifestyle-1.jpg?itok=Zh6nSwEa",
                 "https://www.hublot.com/sites/default/files/styles/global_laptop_1x/public/2021-11/classic-fusion-takashi-murakami-sapphire-rainbow-close-up.jpg?itok=1aaMovJ7",
                 "https://www.hublot.com/sites/default/files/styles/global_laptop_1x/public/2021-11/classic-fusion-takashi-murakami-sapphire-rainbow-back-shot.jpg?itok=8c1lgcR-",
                 "https://www.hublot.com/sites/default/files/styles/global_laptop_1x/public/2021-11/classic-fusion-takashi-murakami-sapphire-rainbow-strap-shot.jpg?itok=NiGT2jr-",
                 "https://www.hublot.com/sites/default/files/styles/global_laptop_1x/public/2021-11/classic-fusion-takashi-murakami-sapphire-rainbow-PR-shot.jpg?itok=_DB0SgWu"
                 ],
             "description": "Movimiento: UNICO: Al desarrollar su propio movimiento de cronógrafo automático, Hublot deseaba que fuese –como todas sus creaciones– pionero, diferente y único. Alma del reloj, este movimiento a corazón abierto revela su arquitectura completamente repensada, con doble embrague y rueda de pilares trasladados al lado de la esfera. Su construcción de 330 componentes se simplificó al máximo para ganar en fiabilidad y solidez.",
             "content": "Materiales: ZAFIRO: En su búsqueda de la fusión perfecta entre movimiento y caja, los ingenieros y químicos de Hublot han investigado y desarrollado un material transparente que revela el corazón del reloj, mientras su solidez protege el mecanismo de manera eficaz. De este modo, la manufactura se ha convertido en experta del zafiro sintético. A partir de este material, Hublot ha obtenido efectos estéticos únicos en relojería, lo que le ha permitido transformar cada reloj en una obra de arte.",
             "colors": ["red", "black", "teal"],
             "sizes": ["XL", "L", "M", "XM", "LX"],
             "price": 10400000,
             "count": 1

         },
         {
             "_id": "5",
             "title": "TOURBILLON CARBON GREEN",
             "images": [
                 "https://www.hublot.com/sites/default/files/styles/watch_item_desktop_1x_scale_no_crop_600_6000_/public/2022-03/Spirit-Of-Big-Bang-Tourbillon-Carbon-Green-42-mm-soldier-shot.png?itok=C23a6WHw",
                 "https://www.hublot.com/sites/default/files/styles/global_laptop_1x/public/2022-03/Spirit-Of-Big-Bang-Tourbillon-Carbon-Green-42-mm-PR-shot.jpg?itok=niyENiA_",
                 "https://www.hublot.com/sites/default/files/styles/global_laptop_1x/public/2022-03/Spirit-Of-Big-Bang-Tourbillon-Carbon-Green-42-mm-back-shot.jpg?itok=dE7h9-uI",
                 "https://www.hublot.com/sites/default/files/styles/global_laptop_1x/public/2022-03/Spirit-Of-Big-Bang-Tourbillon-Carbon-Green-42-mm-side-shot.jpg?itok=PIDvK1cV",
                 "https://www.hublot.com/sites/default/files/styles/global_laptop_1x/public/2022-03/Spirit-Of-Big-Bang-Tourbillon-Carbon-Green-42-mm-strap-shot.jpg?itok=kph_DwZ5"
                 ],
             "description": "Movimiento: MOVIMIENTOS PIONEROS: El Arte de la Fusión se expresa hasta en el corazón del movimiento. Relojes sencillos con conceptos relojeros revolucionarios: Hublot ha creado toda una gama de movimientos manufactura únicos. La arquitectura inédita del cronógrafo automático Unico. La reserva de marcha exclusiva de los calibres Meca-10, Tourbillon y MP-11. El enfoque revolucionario del motor de 11 barriletes MP-05, dotado de 50 días de autonomía. En su Arte de la Fusión, Hublot lleva a cabo una simbiosis perfecta entre funcionalidad, arquitectura y diseño.",
             "content": "Materiales: CARBONO: Muy apreciado en las competiciones automovilísticas, el carbono posee propiedades mecánicas únicas. Es ultraligero, resistente a la torsión y se caracteriza por una relación peso/resistencia óptima. Este material de alta tecnología se presenta en forma de armazón de fibras al que se inyecta una resina epoxi. Hublot utiliza también un carbono de tipo 3D, en el que las fibras se trenzan en tres planos. Otros modelos recurren a un carbono de aspecto escarchado con inclusiones de color.",
             "colors": ["red", "black", "teal"],
             "sizes": ["XL", "L", "M", "XM", "LX"],
             "price": 10500000,
             "count": 1

         },
         {
             "_id": "6",
             "title": "MP-09 TOURBILLON BI-AXIS RED 3D CARBON",
             "images": [
                 "https://www.hublot.com/sites/default/files/styles/watch_item_desktop_1x_scale_no_crop_600_6000_/public/2021-06/Big-Bang-MP-09-Tourbillon-Bi-Axis-Red-3D-Carbon-49-mm-soldier-shot.png?itok=x6CKLdK6",
                 "https://www.hublot.com/sites/default/files/styles/global_laptop_1x/public/2021-06/Big-Bang-MP-09-Tourbillon-Bi-Axis-Red-3D-Carbon-49-mm-PR-shot.jpg?itok=MAKCCFVX",
                 "https://www.hublot.com/sites/default/files/styles/global_laptop_1x/public/2021-06/Big-Bang-MP-09-Tourbillon-Bi-Axis-Red-3D-Carbon-49-mm-Profile-shot.jpg?itok=UfRGb4Ok",
                 "https://www.hublot.com/sites/default/files/styles/global_laptop_1x/public/2021-06/Big-Bang-MP-09-Tourbillon-Bi-Axis-Red-3D-Carbon-49-mm-close-up-shot.jpg?itok=Sjh9YPY6"
                 ],
             "description": "Movimiento: MOVIMIENTOS PIONEROS: El Arte de la Fusión se expresa hasta en el corazón del movimiento. Relojes sencillos con conceptos relojeros revolucionarios: Hublot ha creado toda una gama de movimientos manufactura únicos. La arquitectura inédita del cronógrafo automático Unico. La reserva de marcha exclusiva de los calibres Meca-10, Tourbillon y MP-11. El enfoque revolucionario del motor de 11 barriletes MP-05, dotado de 50 días de autonomía. En su Arte de la Fusión, Hublot lleva a cabo una simbiosis perfecta entre funcionalidad, arquitectura y diseño.",
             "content": "Materiales: CARBONO: Muy apreciado en las competiciones automovilísticas, el carbono posee propiedades mecánicas únicas. Es ultraligero, resistente a la torsión y se caracteriza por una relación peso/resistencia óptima. Este material de alta tecnología se presenta en forma de armazón de fibras al que se inyecta una resina epoxi. Hublot utiliza también un carbono de tipo 3D, en el que las fibras se trenzan en tres planos. Otros modelos recurren a un carbono de aspecto escarchado con inclusiones de color.",
             "colors": ["red", "black", "teal"],
             "sizes": ["XL", "L", "M", "XM", "LX"],
             "price": 10600000,
             "count": 1

         }
    ])

    const [cart, setCart] = useState([])

    const addCart = (id) =>{
        const check = cart.every(item =>{
            return item._id !== id
        })
        if(check){
            const data = products.filter(product =>{
                return product._id === id
            })
            setCart([...cart, ...data])
        }else{
            alert("El Producto Ha Sido Añadido Al Carrito.")
        }
    }

    useEffect(() =>{
       const dataCart =  JSON.parse(localStorage.getItem('dataCart'))
       if(dataCart) setCart(dataCart)
    },[])

    useEffect(() =>{
        localStorage.setItem('dataCart', JSON.stringify(cart))
    },[cart])


    const value = {
        products: [products, setProducts],
        cart: [cart, setCart],
        addCart: addCart
    }

    
    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}
