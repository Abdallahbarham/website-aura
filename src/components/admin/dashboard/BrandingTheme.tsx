
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Separator } from '@/components/ui/separator';
import { 
  Palette, 
  Upload, 
  Code, 
  RefreshCw, 
  Check, 
  X,
  Image,
  Type,
  PenTool
} from 'lucide-react';

const BrandingTheme = () => {
  // Mock data for the theme
  const [primaryColor, setPrimaryColor] = useState('#F7A456');
  const [secondaryColor, setSecondaryColor] = useState('#D29770');
  const [backgroundColor, setBackgroundColor] = useState('#F9F6F0');
  const [textColor, setTextColor] = useState('#47423F');
  const [fontPrimary, setFontPrimary] = useState('Playfair Display');
  const [fontSecondary, setFontSecondary] = useState('Libre Franklin');
  
  const [cssEditor, setCssEditor] = useState(`/* Custom CSS */
.custom-class {
  border-radius: 8px;
  box-shadow: 5px 5px 10px #d1d1d1,
              -5px -5px 10px #ffffff;
}

.custom-button {
  transition: all 0.3s ease;
}

.custom-button:hover {
  transform: translateY(-2px);
}`);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Branding & Theme Control</h2>
      
      <Tabs defaultValue="theme" className="space-y-6">
        <TabsList className="bg-off-white shadow-neumorph-sm p-1 rounded-lg">
          <TabsTrigger 
            value="theme" 
            className="data-[state=active]:shadow-neumorph-inset data-[state=active]:bg-transparent"
          >
            Theme
          </TabsTrigger>
          <TabsTrigger 
            value="brand-assets"
            className="data-[state=active]:shadow-neumorph-inset data-[state=active]:bg-transparent"
          >
            Brand Assets
          </TabsTrigger>
          <TabsTrigger 
            value="custom-css"
            className="data-[state=active]:shadow-neumorph-inset data-[state=active]:bg-transparent"
          >
            Custom CSS
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="theme" className="space-y-6 mt-4">
          <Card className="p-6" raised intensity="light">
            <h3 className="text-lg font-semibold mb-4">Color Palette</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="primaryColor" className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: primaryColor }}></div>
                    Primary Color
                  </Label>
                  <div className="flex mt-2 gap-2">
                    <Input 
                      id="primaryColor" 
                      type="text" 
                      value={primaryColor} 
                      onChange={(e) => setPrimaryColor(e.target.value)}
                      className="bg-off-white shadow-neumorph-inset"
                    />
                    <Input 
                      type="color" 
                      value={primaryColor} 
                      onChange={(e) => setPrimaryColor(e.target.value)}
                      className="w-10 h-10 p-1 cursor-pointer"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="secondaryColor" className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: secondaryColor }}></div>
                    Secondary Color
                  </Label>
                  <div className="flex mt-2 gap-2">
                    <Input 
                      id="secondaryColor" 
                      type="text" 
                      value={secondaryColor} 
                      onChange={(e) => setSecondaryColor(e.target.value)}
                      className="bg-off-white shadow-neumorph-inset"
                    />
                    <Input 
                      type="color" 
                      value={secondaryColor} 
                      onChange={(e) => setSecondaryColor(e.target.value)}
                      className="w-10 h-10 p-1 cursor-pointer"
                    />
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="backgroundColor" className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: backgroundColor }}></div>
                    Background Color
                  </Label>
                  <div className="flex mt-2 gap-2">
                    <Input 
                      id="backgroundColor" 
                      type="text" 
                      value={backgroundColor} 
                      onChange={(e) => setBackgroundColor(e.target.value)}
                      className="bg-off-white shadow-neumorph-inset"
                    />
                    <Input 
                      type="color" 
                      value={backgroundColor} 
                      onChange={(e) => setBackgroundColor(e.target.value)}
                      className="w-10 h-10 p-1 cursor-pointer"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="textColor" className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: textColor }}></div>
                    Text Color
                  </Label>
                  <div className="flex mt-2 gap-2">
                    <Input 
                      id="textColor" 
                      type="text" 
                      value={textColor} 
                      onChange={(e) => setTextColor(e.target.value)}
                      className="bg-off-white shadow-neumorph-inset"
                    />
                    <Input 
                      type="color" 
                      value={textColor} 
                      onChange={(e) => setTextColor(e.target.value)}
                      className="w-10 h-10 p-1 cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <Separator className="my-6" />
            
            <h3 className="text-lg font-semibold mb-4">Typography</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="fontPrimary" className="flex items-center gap-2">
                  <Type size={16} />
                  Primary Font
                </Label>
                <div className="mt-2">
                  <select 
                    id="fontPrimary" 
                    value={fontPrimary} 
                    onChange={(e) => setFontPrimary(e.target.value)}
                    className="w-full p-2 rounded-lg bg-off-white shadow-neumorph-inset"
                  >
                    <option value="Playfair Display">Playfair Display</option>
                    <option value="Merriweather">Merriweather</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Times New Roman">Times New Roman</option>
                  </select>
                </div>
                <p className="mt-2 text-sm text-stone-gray">Used for headings and titles</p>
              </div>
              
              <div>
                <Label htmlFor="fontSecondary" className="flex items-center gap-2">
                  <Type size={16} />
                  Secondary Font
                </Label>
                <div className="mt-2">
                  <select 
                    id="fontSecondary" 
                    value={fontSecondary} 
                    onChange={(e) => setFontSecondary(e.target.value)}
                    className="w-full p-2 rounded-lg bg-off-white shadow-neumorph-inset"
                  >
                    <option value="Libre Franklin">Libre Franklin</option>
                    <option value="Open Sans">Open Sans</option>
                    <option value="Roboto">Roboto</option>
                    <option value="Arial">Arial</option>
                  </select>
                </div>
                <p className="mt-2 text-sm text-stone-gray">Used for body text and paragraphs</p>
              </div>
            </div>
            
            <div className="mt-6 flex justify-end gap-2">
              <Button variant="outline" className="bg-off-white shadow-neumorph-sm hover:shadow-neumorph-md">
                <RefreshCw size={16} className="mr-2" />
                Reset to Defaults
              </Button>
              <Button variant="default" className="bg-off-white shadow-neumorph-sm hover:shadow-neumorph-md">
                <Check size={16} className="mr-2" />
                Save Changes
              </Button>
            </div>
          </Card>
          
          <Card className="p-6" raised intensity="light">
            <h3 className="text-lg font-semibold mb-4">Theme Preview</h3>
            
            <div className="p-4 rounded-lg" style={{ backgroundColor }}>
              <h1 className="text-2xl font-bold mb-2" style={{ color: textColor, fontFamily: fontPrimary }}>
                Sample Heading
              </h1>
              <p className="mb-4" style={{ color: textColor, fontFamily: fontSecondary }}>
                This is a preview of how your content might look with the selected theme settings.
              </p>
              <div className="flex gap-2">
                <button 
                  className="px-4 py-2 rounded-lg font-medium transition-all" 
                  style={{ backgroundColor: primaryColor, color: 'white' }}
                >
                  Primary Button
                </button>
                <button 
                  className="px-4 py-2 rounded-lg font-medium transition-all" 
                  style={{ backgroundColor: secondaryColor, color: 'white' }}
                >
                  Secondary Button
                </button>
              </div>
            </div>
          </Card>
        </TabsContent>
        
        <TabsContent value="brand-assets" className="space-y-6 mt-4">
          <Card className="p-6" raised intensity="light">
            <h3 className="text-lg font-semibold mb-4">Logo Management</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <Label className="block mb-2">Primary Logo</Label>
                <div className="border-2 border-dashed border-stone-gray/30 rounded-lg p-6 text-center">
                  <img 
                    src="/lovable-uploads/e4bf9be8-0dd9-40ba-a8eb-f7ec76ca64a5.png"
                    alt="Primary Logo" 
                    className="max-h-40 mx-auto mb-4"
                  />
                  <div className="flex justify-center gap-2">
                    <Button variant="outline" className="text-sm bg-off-white shadow-neumorph-sm hover:shadow-neumorph-md">
                      <Upload size={14} className="mr-1" /> Replace
                    </Button>
                    <Button variant="outline" className="text-sm bg-off-white shadow-neumorph-sm hover:shadow-neumorph-md">
                      <X size={14} className="mr-1" /> Remove
                    </Button>
                  </div>
                </div>
              </div>
              
              <div>
                <Label className="block mb-2">Favicon</Label>
                <div className="border-2 border-dashed border-stone-gray/30 rounded-lg p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-stone-gray/20 rounded-lg flex items-center justify-center">
                    <Image size={24} className="text-stone-gray" />
                  </div>
                  <Button variant="outline" className="text-sm bg-off-white shadow-neumorph-sm hover:shadow-neumorph-md">
                    <Upload size={14} className="mr-1" /> Upload Favicon
                  </Button>
                </div>
              </div>
            </div>
            
            <Separator className="my-6" />
            
            <h3 className="text-lg font-semibold mb-4">Other Brand Assets</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="border border-stone-gray/30 rounded-lg overflow-hidden">
                <div className="h-32 bg-stone-gray/20 flex items-center justify-center">
                  <Image size={32} className="text-stone-gray" />
                </div>
                <div className="p-3">
                  <p className="font-medium text-sm">Hero Banner</p>
                  <p className="text-xs text-stone-gray">1200 × 600 px</p>
                </div>
              </div>
              
              <div className="border border-stone-gray/30 rounded-lg overflow-hidden">
                <div className="h-32 bg-stone-gray/20 flex items-center justify-center">
                  <Image size={32} className="text-stone-gray" />
                </div>
                <div className="p-3">
                  <p className="font-medium text-sm">Social Media Profile</p>
                  <p className="text-xs text-stone-gray">800 × 800 px</p>
                </div>
              </div>
              
              <div className="border border-stone-gray/30 rounded-lg overflow-hidden">
                <div className="h-32 bg-stone-gray/20 flex items-center justify-center">
                  <Image size={32} className="text-stone-gray" />
                </div>
                <div className="p-3">
                  <p className="font-medium text-sm">Email Header</p>
                  <p className="text-xs text-stone-gray">600 × 200 px</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <Button variant="outline" className="bg-off-white shadow-neumorph-sm hover:shadow-neumorph-md">
                <Upload size={16} className="mr-2" />
                Upload New Asset
              </Button>
            </div>
          </Card>
        </TabsContent>
        
        <TabsContent value="custom-css" className="mt-4">
          <Card className="p-6" raised intensity="light">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Code size={20} className="mr-2" />
              Custom CSS Editor
            </h3>
            
            <p className="text-sm text-stone-gray mb-4">
              Add custom CSS rules to fine-tune your site's appearance. Changes will apply globally.
            </p>
            
            <div className="bg-rich-black text-white p-4 rounded-lg font-mono text-sm">
              <textarea 
                rows={12}
                value={cssEditor}
                onChange={(e) => setCssEditor(e.target.value)}
                className="w-full bg-transparent outline-none resize-none"
              />
            </div>
            
            <div className="mt-6 flex justify-between">
              <Button variant="outline" className="text-champagne bg-off-white shadow-neumorph-sm hover:shadow-neumorph-md">
                <PenTool size={16} className="mr-2" />
                Format Code
              </Button>
              
              <div className="flex gap-2">
                <Button variant="outline" className="bg-off-white shadow-neumorph-sm hover:shadow-neumorph-md">
                  <RefreshCw size={16} className="mr-2" />
                  Reset
                </Button>
                <Button className="bg-off-white shadow-neumorph-sm hover:shadow-neumorph-md">
                  <Check size={16} className="mr-2" />
                  Save Changes
                </Button>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BrandingTheme;
