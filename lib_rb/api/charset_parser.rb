# encoding: UTF-8
#
# Glǽmscribe (also written Glaemscribe) is a software dedicated to
# the transcription of texts between writing systems, and more 
# specifically dedicated to the transcription of J.R.R. Tolkien's 
# invented languages to some of his devised writing systems.
# 
# Copyright (C) 2015 Benjamin Babut (Talagan).
# 
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU Affero General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# any later version.
# 
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU Affero General Public License for more details.
# 
# You should have received a copy of the GNU Affero General Public License
# along with this program.  If not, see <http://www.gnu.org/licenses/>.

module Glaemscribe
  module API
    
    class CharsetParser
      
      def initialize()
        @charset = nil
      end
      
      def parse(file_path)
        @charset = Charset.new(ResourceManager::charset_name_from_file_path(file_path))  
        
        raw = File.open(file_path,"rb:utf-8").read
        doc = Glaeml::Parser.new.parse(raw)

        if(doc.errors.any?)
          @charset.errors = doc.errors
          return @charset
        end
        
        doc.root_node.gpath("char").each { |char_element|
          code   = char_element.args[0].hex
          names  = char_element.args[1..-1].map{|cname| cname.strip }.reject{ |cname| cname.empty? }
          @charset.add_char(char_element.line,code,names)
        }
        
        doc.root_node.gpath("virtual").each { |virtual_element|
          names = virtual_element.args
          classes = {}
          virtual_element.gpath("class").each { |class_element|
            result    = class_element.args[0]
            triggers  = class_element.args[1..-1].map{|cname| cname.strip }.reject{ |cname| cname.empty? }     
            classes[result] = triggers
          }
          @charset.add_virtual_char(virtual_element.line,classes,names)
        }
        
        @charset.finalize
             
        @charset 
      end
      
    end
  end
end