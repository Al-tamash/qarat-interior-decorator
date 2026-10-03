import os
import shutil

base_dir = r"c:\Users\Mohd Azimullah\Downloads\Qarat-main\Qarat-main\Qarat_Website_Photos_Drive"

if os.path.exists(base_dir):
    shutil.rmtree(base_dir)

folders = {
    # ROOT GUIDE
    "00_INSTRUCTIONS_READ_FIRST.txt": """=============================================================================
         QARAT INTERIOR DECORATOR - WEBSITE CARD-BY-CARD PHOTO GUIDE
=============================================================================

Namaste Ataullah Khan Sahab / Abdul Kareem Sahab,

Aapki website par har service aur har material product ka alag se "CARD" (box) bana hua hai.
Har card me bilkul sahi photo lage, iske liye humne WEBSITE KE HAR CARD KA SEPARATE FOLDER banaya hai.

Aapko bas ye karna hai:
Jis folder ka jo naam hai, us folder ke andar us item ki 2 se 4 saaf-suthri horizontal (aadi) photos upload kar dijiye.

-----------------------------------------------------------------------------
📁 01_INTERIOR_WORK_SERVICES (Site Par Kiye Gaye Kaam Ki Photos)
-----------------------------------------------------------------------------
1. Ceiling Work:
   - Card 01: Gypsum False Ceiling (Hall/Bedroom gypsum ceiling with lights)
   - Card 02: Gypsum Partition Wall (Office cabin / drywall partition)
   - Card 03: POP Murga Jali Ceiling (Heavy wire mesh + POP moulding work)
   - Card 04: Gypsum 2x2 Grid Ceiling (Office modular drop ceiling)
   - Card 05: PVC Panel Ceiling (Waterproof PVC ceiling in balcony/kitchen)

2. Wall Panels & Decor:
   - Card 01: WPC Wall Panels (Exterior elevation / interior wood louvers)
   - Card 02: PVC Panel Walls (Moisture-proof PVC wall cladding)
   - Card 03: UV Marble Sheets (8x4 high-gloss marble sheet on TV wall / lobby)
   - Card 04: Fluted & Charcoal Panels (3D vertical ribbed fluted panels)
   - Card 05: Designer Wallpapers (Imported wallpaper installed in room)

3. Modular Kitchen & Furniture:
   - Card 01: Modular Kitchen (Complete kitchen with acrylic/laminate finish)
   - Card 02: Modular Wardrobes (Sliding or openable bedroom almirah)
   - Card 03: TV Units & Media Consoles (Wall-hung TV cabinet setup)
   - Card 04: Custom Furniture & Displays (Vanities, study desks, shop counters)

4. Commercial Turnkey Projects:
   - Card 01: Office & Corporate Interiors (Office cabins, workstations, conference room)
   - Card 02: Shop & Showroom Interiors (Retail store, garment shop, showroom)
   - Card 03: Home & Residential Turnkey (Complete flat/villa interior)
   - Card 04: Clinics, Cafes & Institutions (Diagnostic center, clinic, cafe, institute)

-----------------------------------------------------------------------------
📁 02_MATERIAL_SUPPLY_WHOLESALE (Dukaan & Warehouse Stock Photos)
-----------------------------------------------------------------------------
1. Gypsum Boards & Plasters:
   - Card 01: Saint-Gobain Gyproc Plasterboards (Gyproc board stack)
   - Card 02: India Gypsum Plasterboards (India Gypsum authorized stock)
   - Card 03: USG Knauf Drywall Systems (Knauf plasterboard / partition stock)
   - Card 04: Gypsum Jointing Compounds & Tapes (Elite-90 bags, joint tape rolls)

2. Framing Channels & Hardware:
   - Card 01: GI Ceiling & Perimeter Channels (Ceiling sections 0.50mm, perimeter channels)
   - Card 02: Drywall Partition Studs & Tracks (C-studs, floor tracks for partitions)
   - Card 03: 2x2 Modular T-Grid Suspension & Tiles (T-grid channels, 2x2 ceiling tiles)
   - Card 04: Drywall Screws, Fasteners & Murga Jali (Screw boxes, anchors, Murga Jali rolls)

3. Wall & Ceiling Panels:
   - Card 01: PVC Wall & Ceiling Panels (PVC panel bundles in godown)
   - Card 02: WPC Exterior & Interior Louvers (Heavy wood composite louvers)
   - Card 03: Fluted Decorative Panels (3D ribbed fluted panel sheets)
   - Card 04: Charcoal Louver Panels (Dark luxury charcoal panels display)

4. Decorative Surfaces & Wallpapers:
   - Card 01: UV Marble Sheets 8x4 ft (8x4 high-gloss sheets stock & display)
   - Card 02: Designer Wallpaper Rolls & Catalogs (Wallpaper rolls & open catalog books)

-----------------------------------------------------------------------------
📁 03_COMPANY_PROFILE_AND_INFRASTRUCTURE (Trust & Credibility)
-----------------------------------------------------------------------------
1. Founders / Directors: Ataullah Khan Sahab & Abdul Kareem Sahab ki portrait photos.
2. Shop & Warehouse: Bahar ka signboard, counter, aur godown ka wide angle view.
3. Team & Supervisors: Karigar kaam karte hue aur site supervisor.
4. Certificates: India Gypsum Dealership certificate & visiting card.

=============================================================================
""",

    # 01 INTERIOR WORK - CEILING WORK
    "01_INTERIOR_WORK_SERVICES/01_Ceiling_Work/Card_01_Gypsum_False_Ceiling/INFO_Photo_Yahan_Dalein.txt": """[WEBSITE CARD: Gypsum False Ceiling Contractor]
Is folder me upload karein:
- Gypsum board false ceiling ki finished site photo.
- Drawing room, hall, ya bedroom ceiling jisme cove lighting / LED strip light jal rahi ho.
- Target: 2 se 4 achhi photos.
""",
    "01_INTERIOR_WORK_SERVICES/01_Ceiling_Work/Card_02_Gypsum_Partition_Wall/INFO_Photo_Yahan_Dalein.txt": """[WEBSITE CARD: Gypsum Partition Wall Contractor]
Is folder me upload karein:
- Office cabin, conference room, clinic ya room division ki drywall gypsum partition wall.
- Gypsum framing ya paint hone ke baad finished partition ki photo.
- Target: 2 se 4 photos.
""",
    "01_INTERIOR_WORK_SERVICES/01_Ceiling_Work/Card_03_POP_Murga_Jali_False_Ceiling/INFO_Photo_Yahan_Dalein.txt": """[WEBSITE CARD: POP Murga Jali False Ceiling Contractor]
Is folder me upload karein:
- POP (Plaster of Paris) ceiling jisme Murga Jali (wire mesh) lagti hai.
- POP cornices, domes, ya ornamental decorative borders ki site photo.
- Target: 2 se 4 photos.
""",
    "01_INTERIOR_WORK_SERVICES/01_Ceiling_Work/Card_04_Gypsum_2x2_Grid_Ceiling/INFO_Photo_Yahan_Dalein.txt": """[WEBSITE CARD: Gypsum 2x2 Grid False Ceiling Contractor]
Is folder me upload karein:
- 2x2 modular drop grid ceiling jo offices, hospitals, ya commercial halls me lagti hai.
- T-grid structure ke saath ceiling tiles ki finished photo.
- Target: 2 se 4 photos.
""",
    "01_INTERIOR_WORK_SERVICES/01_Ceiling_Work/Card_05_PVC_Panel_Ceiling/INFO_Photo_Yahan_Dalein.txt": """[WEBSITE CARD: PVC Panel Ceiling Contractor]
Is folder me upload karein:
- PVC ceiling panels jo ceiling par lagi ho (waterproof & termite-proof).
- Balcony ceiling, kitchen ceiling, ya drawing room PVC ceiling ki photo.
- Target: 2 se 4 photos.
""",

    # 01 INTERIOR WORK - WALL PANELS & DECOR
    "01_INTERIOR_WORK_SERVICES/02_Wall_Panels_And_Decor/Card_01_WPC_Wall_Panels/INFO_Photo_Yahan_Dalein.txt": """[WEBSITE CARD: WPC Wall Panel Contractor]
Is folder me upload karein:
- WPC (Wood Plastic Composite) exterior louvers ya interior wall panels ki site execution photo.
- Outdoor facade / building elevation ya luxury drawing room wooden louvers.
- Target: 2 se 4 photos.
""",
    "01_INTERIOR_WORK_SERVICES/02_Wall_Panels_And_Decor/Card_02_PVC_Panel_Walls/INFO_Photo_Yahan_Dalein.txt": """[WEBSITE CARD: PVC Panel Wall Contractor]
Is folder me upload karein:
- PVC wall panels ki finished wall cladding (seelan/moisture wali deewar ya decorative wall).
- Target: 2 se 4 photos.
""",
    "01_INTERIOR_WORK_SERVICES/02_Wall_Panels_And_Decor/Card_03_UV_Marble_Sheets/INFO_Photo_Yahan_Dalein.txt": """[WEBSITE CARD: UV Marble Sheet Contractor]
Is folder me upload karein:
- 8x4 UV Marble sheet deewar par lagi hui (TV unit background, lift lobby, drawing room feature wall).
- High gloss marble finish jisme lighting reflect ho rahi ho.
- Target: 2 se 4 photos.
""",
    "01_INTERIOR_WORK_SERVICES/02_Wall_Panels_And_Decor/Card_04_Fluted_And_Charcoal_Panels/INFO_Photo_Yahan_Dalein.txt": """[WEBSITE CARD: Fluted & Charcoal Panel Contractor]
Is folder me upload karein:
- 3D ribbed vertical fluted panels ya luxury charcoal louvers wall par lage hue.
- TV unit paneling, bed-back wall, ya entrance foyer wall.
- Target: 2 se 4 photos.
""",
    "01_INTERIOR_WORK_SERVICES/02_Wall_Panels_And_Decor/Card_05_Designer_Wallpapers/INFO_Photo_Yahan_Dalein.txt": """[WEBSITE CARD: Wallpaper Contractor]
Is folder me upload karein:
- Designer wallpaper bedroom, hall, ya office me laga hua.
- 3D, damask, ya floral textured wallpaper ki clear photo.
- Target: 2 se 4 photos.
""",

    # 01 INTERIOR WORK - MODULAR KITCHEN & FURNITURE
    "01_INTERIOR_WORK_SERVICES/03_Modular_Kitchen_And_Furniture/Card_01_Modular_Kitchen/INFO_Photo_Yahan_Dalein.txt": """[WEBSITE CARD: Modular Kitchen Contractor]
Is folder me upload karein:
- Aapki banayi hui complete Modular Kitchen (L-Shape, U-Shape, ya Straight).
- Acrylic / Laminate cabinets, chimney, counter platform, soft-close baskets.
- Target: 2 se 5 achhi photos.
""",
    "01_INTERIOR_WORK_SERVICES/03_Modular_Kitchen_And_Furniture/Card_02_Modular_Wardrobes/INFO_Photo_Yahan_Dalein.txt": """[WEBSITE CARD: Modular Wardrobe Contractor]
Is folder me upload karein:
- Bedroom sliding wardrobe ya openable almirah (floor to ceiling).
- Glossy ya textured laminate / acrylic door finish.
- Target: 2 se 4 photos.
""",
    "01_INTERIOR_WORK_SERVICES/03_Modular_Kitchen_And_Furniture/Card_03_TV_Units_And_Media_Consoles/INFO_Photo_Yahan_Dalein.txt": """[WEBSITE CARD: TV Units & Media Consoles Contractor]
Is folder me upload karein:
- Living room TV unit setup jisme fluted panels, marble sheet, drawers aur LED lights lagi hon.
- Target: 2 se 4 photos.
""",
    "01_INTERIOR_WORK_SERVICES/03_Modular_Kitchen_And_Furniture/Card_04_Custom_Furniture_And_Displays/INFO_Photo_Yahan_Dalein.txt": """[WEBSITE CARD: Custom Furniture & Shop Display Contractor]
Is folder me upload karein:
- Custom study table, vanity unit, mandir, ya shop cash counter / display shelving.
- Target: 2 se 4 photos.
""",

    # 01 INTERIOR WORK - COMMERCIAL TURNKEY
    "01_INTERIOR_WORK_SERVICES/04_Commercial_Turnkey_Projects/Card_01_Office_And_Corporate_Interiors/INFO_Photo_Yahan_Dalein.txt": """[WEBSITE CARD: Office & Corporate Interior Contractor]
Is folder me upload karein:
- Corporate office interior, executive cabin, workstations, conference room.
- Grid ceiling aur glass/gypsum partition ke saath.
- Target: 2 se 4 photos.
""",
    "01_INTERIOR_WORK_SERVICES/04_Commercial_Turnkey_Projects/Card_02_Shop_And_Showroom_Interiors/INFO_Photo_Yahan_Dalein.txt": """[WEBSITE CARD: Shop & Showroom Interior Contractor]
Is folder me upload karein:
- Retail store, garment shop, optical/jewellery showroom ya mall shop interior execution.
- Target: 2 se 4 photos.
""",
    "01_INTERIOR_WORK_SERVICES/04_Commercial_Turnkey_Projects/Card_03_Home_And_Residential_Turnkey/INFO_Photo_Yahan_Dalein.txt": """[WEBSITE CARD: Home & Residential Turnkey Contractor]
Is folder me upload karein:
- Pura flat (2BHK / 3BHK) ya villa jahan turnkey kaam kiya gaya ho (ceiling + kitchen + painting + woodwork).
- Target: 2 se 4 wide-angle photos.
""",
    "01_INTERIOR_WORK_SERVICES/04_Commercial_Turnkey_Projects/Card_04_Clinics_Cafes_And_Institutions/INFO_Photo_Yahan_Dalein.txt": """[WEBSITE CARD: Commercial & Institutional Spaces Contractor]
Is folder me upload karein:
- Hospital diagnostic clinic, coaching institute, restaurant, cafe, ya banquet hall interior.
- Target: 2 se 4 photos.
""",

    # 02 MATERIAL SUPPLY - GYPSUM
    "02_MATERIAL_SUPPLY_WHOLESALE/01_Gypsum_Boards_And_Plasters/Card_01_Saint_Gobain_Gyproc_Plasterboards/INFO_Photo_Yahan_Dalein.txt": """[WEBSITE CARD: Saint-Gobain Gyproc Plasterboards]
Is folder me upload karein:
- Saint-Gobain Gyproc plasterboard stacks warehouse / godown me.
- Gyproc branding / logo printed on boards / edge tape clear dikhe.
- Target: 2 se 4 photos.
""",
    "02_MATERIAL_SUPPLY_WHOLESALE/01_Gypsum_Boards_And_Plasters/Card_02_India_Gypsum_Plasterboards_Authorized/INFO_Photo_Yahan_Dalein.txt": """[WEBSITE CARD: India Gypsum Plasterboards (Authorized Dealer)]
Is folder me upload karein:
- India Gypsum branded plasterboards stacks in warehouse.
- ISI mark ya India Gypsum packing / print dikhe to sabse best.
- Target: 2 se 4 photos.
""",
    "02_MATERIAL_SUPPLY_WHOLESALE/01_Gypsum_Boards_And_Plasters/Card_03_USG_Knauf_Drywall_Systems/INFO_Photo_Yahan_Dalein.txt": """[WEBSITE CARD: USG Knauf Drywall & Ceiling Systems]
Is folder me upload karein:
- USG Knauf plasterboards ya drywall partition framing stock (agar warehouse me available ho).
- Target: 1 se 3 photos.
""",
    "02_MATERIAL_SUPPLY_WHOLESALE/01_Gypsum_Boards_And_Plasters/Card_04_Gypsum_Jointing_Compounds_And_Tapes/INFO_Photo_Yahan_Dalein.txt": """[WEBSITE CARD: Gypsum Jointing Compounds & Plaster]
Is folder me upload karein:
- Gyproc Elite-90 bags, jointing compound powder bags godown me.
- Fiberglass joint tape rolls, paper tape rolls.
- Target: 2 se 4 photos.
""",

    # 02 MATERIAL SUPPLY - FRAMING HARDWARE
    "02_MATERIAL_SUPPLY_WHOLESALE/02_Framing_Channels_And_Hardware/Card_01_GI_Ceiling_And_Perimeter_Channels/INFO_Photo_Yahan_Dalein.txt": """[WEBSITE CARD: GI Ceiling & Perimeter Channels]
Is folder me upload karein:
- Heavy gauge GI ceiling sections (0.45mm / 0.50mm) ke bundles warehouse me.
- Perimeter channels, intermediate channels, wall angle bundles.
- Target: 2 se 4 photos.
""",
    "02_MATERIAL_SUPPLY_WHOLESALE/02_Framing_Channels_And_Hardware/Card_02_Drywall_Partition_Studs_And_Tracks/INFO_Photo_Yahan_Dalein.txt": """[WEBSITE CARD: Drywall Partition Studs & Tracks]
Is folder me upload karein:
- GI C-Studs aur Floor Tracks (drywall partition framing channels) ke bundles.
- Target: 2 se 4 photos.
""",
    "02_MATERIAL_SUPPLY_WHOLESALE/02_Framing_Channels_And_Hardware/Card_03_2x2_Modular_T_Grid_Suspension_And_Tiles/INFO_Photo_Yahan_Dalein.txt": """[WEBSITE CARD: 2x2 Modular T-Grid Suspension & Tiles]
Is folder me upload karein:
- Main runners, Cross tees (4ft / 2ft) ke cartons / bundles.
- 2x2 PVC laminated ceiling tiles ke boxes / stack.
- Target: 2 se 4 photos.
""",
    "02_MATERIAL_SUPPLY_WHOLESALE/02_Framing_Channels_And_Hardware/Card_04_Drywall_Screws_Fasteners_Murga_Jali/INFO_Photo_Yahan_Dalein.txt": """[WEBSITE CARD: Drywall Screws, Fasteners & Murga Jali]
Is folder me upload karein:
- Black phosphated drywall screw boxes (25mm, 35mm).
- Rawl plugs, anchor fasteners.
- Murga Jali (chicken wire mesh) ke rolls godown me.
- Target: 2 se 4 photos.
""",

    # 02 MATERIAL SUPPLY - PANELS
    "02_MATERIAL_SUPPLY_WHOLESALE/03_Wall_And_Ceiling_Panels/Card_01_PVC_Wall_And_Ceiling_Panels/INFO_Photo_Yahan_Dalein.txt": """[WEBSITE CARD: PVC Wall & Ceiling Panels]
Is folder me upload karein:
- PVC panel bundles godown me rakhe hue.
- PVC sample display (wooden texture, high gloss, matte).
- Target: 2 se 4 photos.
""",
    "02_MATERIAL_SUPPLY_WHOLESALE/03_Wall_And_Ceiling_Panels/Card_02_WPC_Exterior_Interior_Louvers/INFO_Photo_Yahan_Dalein.txt": """[WEBSITE CARD: WPC Louvers & Fluted Exterior/Interior Panels]
Is folder me upload karein:
- Heavy WPC louvers stock / display.
- Outdoor facade cladding panels samples.
- Target: 2 se 4 photos.
""",
    "02_MATERIAL_SUPPLY_WHOLESALE/03_Wall_And_Ceiling_Panels/Card_03_Fluted_Decorative_Panels/INFO_Photo_Yahan_Dalein.txt": """[WEBSITE CARD: Fluted Decorative Panels]
Is folder me upload karein:
- 3D vertical ribbed fluted panels stock ya sample panels.
- Target: 2 se 4 photos.
""",
    "02_MATERIAL_SUPPLY_WHOLESALE/03_Wall_And_Ceiling_Panels/Card_04_Charcoal_Louver_Panels/INFO_Photo_Yahan_Dalein.txt": """[WEBSITE CARD: Charcoal Louver Panels]
Is folder me upload karein:
- High-density charcoal panels display / stock (dark charcoal, gold line louvers).
- Target: 2 se 4 photos.
""",

    # 02 MATERIAL SUPPLY - DECORATIVE
    "02_MATERIAL_SUPPLY_WHOLESALE/04_Decorative_Surfaces_And_Wallpapers/Card_01_UV_Marble_Sheets_8x4_ft/INFO_Photo_Yahan_Dalein.txt": """[WEBSITE CARD: UV Marble Sheets (8x4 ft)]
Is folder me upload karein:
- 8x4 ft high-gloss UV marble sheets warehouse stock ya shop display racks me.
- White Statuario, Golden Calacatta, Black Marquina designs.
- Metallic T-profile & L-trim strips.
- Target: 2 se 5 photos.
""",
    "02_MATERIAL_SUPPLY_WHOLESALE/04_Decorative_Surfaces_And_Wallpapers/Card_02_Designer_Wallpaper_Rolls_And_Catalogs/INFO_Photo_Yahan_Dalein.txt": """[WEBSITE CARD: Designer Wallpaper Rolls]
Is folder me upload karein:
- Imported wallpaper rolls warehouse me rakhe hue.
- Open wallpaper catalog books jisme texture patterns dikhein.
- Target: 2 se 4 photos.
""",

    # 03 COMPANY PROFILE
    "03_COMPANY_PROFILE_AND_INFRASTRUCTURE/01_Founders_Directors/01_Mr_Ataullah_Khan_Director/INFO_Photo_Yahan_Dalein.txt": """[DIRECTOR PROFILE: Mr. Ataullah Khan]
Is folder me upload karein:
- Mr. Ataullah Khan ki portrait / professional photo.
- Clean background, smiling/confident posture, office chair ya shop desk par.
- Target: 1 se 3 clear photos.
""",
    "03_COMPANY_PROFILE_AND_INFRASTRUCTURE/01_Founders_Directors/02_Mr_Abdul_Kareem_Director/INFO_Photo_Yahan_Dalein.txt": """[DIRECTOR PROFILE: Mr. Abdul Kareem]
Is folder me upload karein:
- Mr. Abdul Kareem ki portrait / professional photo.
- Clean background, smiling/confident posture, office chair ya shop desk par.
- Target: 1 se 3 clear photos.
""",
    "03_COMPANY_PROFILE_AND_INFRASTRUCTURE/02_Shop_Showroom_And_Godown/01_Outdoor_Shop_Signboard_Front/INFO_Photo_Yahan_Dalein.txt": """[INFRASTRUCTURE: Shop Front & Outdoor Signboard]
Is folder me upload karein:
- Qarat Interior Decorator ka bahar ka main signboard / showroom facade ki clear photo.
- Target: 1 se 3 photos.
""",
    "03_COMPANY_PROFILE_AND_INFRASTRUCTURE/02_Shop_Showroom_And_Godown/02_Billing_And_Office_Counter/INFO_Photo_Yahan_Dalein.txt": """[INFRASTRUCTURE: Billing Counter & Office Space]
Is folder me upload karein:
- Showroom ka customer reception counter / billing counter / meeting area.
- Target: 1 se 3 photos.
""",
    "03_COMPANY_PROFILE_AND_INFRASTRUCTURE/02_Shop_Showroom_And_Godown/03_Wholesale_Warehouse_Godown_Stock_Wide/INFO_Photo_Yahan_Dalein.txt": """[INFRASTRUCTURE: Wholesale Warehouse Godown Wide View]
Is folder me upload karein:
- Main warehouse / godown ka wide-angle view jisme bhari matra me gypsum boards, GI channels aur stock dikhe.
- Delivery pickup vehicle / loading area (agar ho).
- Target: 2 se 5 photos.
""",
    "03_COMPANY_PROFILE_AND_INFRASTRUCTURE/03_Team_And_Supervisors_On_Site/01_Craftsmen_Installing_Ceilings_Panels/INFO_Photo_Yahan_Dalein.txt": """[TEAM: In-House Craftsmen On Site]
Is folder me upload karein:
- Karigar ceiling framing karte hue, gypsum sheet lagate hue, ya panels install karte hue.
- Target: 2 se 4 photos.
""",
    "03_COMPANY_PROFILE_AND_INFRASTRUCTURE/03_Team_And_Supervisors_On_Site/02_Site_Supervisors_Managing_Work/INFO_Photo_Yahan_Dalein.txt": """[TEAM: Site Supervisors]
Is folder me upload karein:
- Site supervisor measuring tape ke saath ya drawing check karte hue.
- Target: 1 se 3 photos.
""",
    "03_COMPANY_PROFILE_AND_INFRASTRUCTURE/04_Dealership_Certificates_And_Visiting_Cards/01_India_Gypsum_Dealer_Certificate/INFO_Photo_Yahan_Dalein.txt": """[CREDENTIALS: India Gypsum Authorized Dealership Certificate]
Is folder me upload karein:
- India Gypsum Authorized Dealer certificate / plaque / award ki clean photo ya scan.
- Saint-Gobain Gyproc ka memento ya certificate (agar available ho).
- Target: 1 se 2 photos.
""",
    "03_COMPANY_PROFILE_AND_INFRASTRUCTURE/04_Dealership_Certificates_And_Visiting_Cards/02_Official_Visiting_Card_And_Bill_Letterhead/INFO_Photo_Yahan_Dalein.txt": """[CREDENTIALS: Official Visiting Card & Letterhead]
Is folder me upload karein:
- Qarat Interior Decorator visiting card ki clear photo.
- Official letterhead ya invoice stamp.
- Target: 1 se 2 photos.
"""
}

for rel_path, content in folders.items():
    full_path = os.path.join(base_dir, rel_path)
    os.makedirs(os.path.dirname(full_path), exist_ok=True)
    with open(full_path, "w", encoding="utf-8") as f:
        f.write(content)

print(f"[OK] Successfully created 1-to-1 card-based folder structure with {len(folders)} specific folders & instruction guides!")
