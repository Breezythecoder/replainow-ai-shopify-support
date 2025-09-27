import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CheckCircle, XCircle, AlertTriangle, Eye, Contrast, Type, Palette, Smartphone, Monitor } from 'lucide-react';

interface DesignIssue {
  id: string;
  type: 'contrast' | 'typography' | 'spacing' | 'color' | 'responsive' | 'accessibility';
  severity: 'critical' | 'high' | 'medium' | 'low';
  element: string;
  description: string;
  suggestion: string;
  fix: string;
}

const DesignAuditor = () => {
  const [issues, setIssues] = useState<DesignIssue[]>([]);
  const [isAuditing, setIsAuditing] = useState(false);
  const [auditResults, setAuditResults] = useState({
    totalIssues: 0,
    criticalIssues: 0,
    highIssues: 0,
    mediumIssues: 0,
    lowIssues: 0
  });

  const runDesignAudit = () => {
    setIsAuditing(true);
    
    // Simulate audit process
    setTimeout(() => {
      const detectedIssues: DesignIssue[] = [
        {
          id: 'contrast-1',
          type: 'contrast',
          severity: 'critical',
          element: 'Hero Text',
          description: 'White text on light background has insufficient contrast ratio',
          suggestion: 'Use darker background or lighter text',
          fix: 'Change background to darker gradient or increase text opacity'
        },
        {
          id: 'typography-1',
          type: 'typography',
          severity: 'high',
          element: 'Feature Cards',
          description: 'Font sizes too small on mobile devices',
          suggestion: 'Increase mobile font sizes for better readability',
          fix: 'Use responsive typography scale with larger mobile sizes'
        },
        {
          id: 'spacing-1',
          type: 'spacing',
          severity: 'medium',
          element: 'Button Groups',
          description: 'Inconsistent spacing between buttons',
          suggestion: 'Use consistent spacing system',
          fix: 'Apply uniform gap classes (gap-4, gap-6)'
        },
        {
          id: 'color-1',
          type: 'color',
          severity: 'high',
          element: 'CTA Buttons',
          description: 'Button colors don\'t follow brand guidelines',
          suggestion: 'Use consistent brand colors',
          fix: 'Apply brand color variables consistently'
        },
        {
          id: 'responsive-1',
          type: 'responsive',
          severity: 'critical',
          element: 'Hero Section',
          description: 'Layout breaks on mobile devices',
          suggestion: 'Improve mobile responsiveness',
          fix: 'Add proper mobile breakpoints and stacking'
        },
        {
          id: 'accessibility-1',
          type: 'accessibility',
          severity: 'high',
          element: 'Interactive Elements',
          description: 'Missing focus states for keyboard navigation',
          suggestion: 'Add visible focus indicators',
          fix: 'Implement focus-visible styles'
        },
        {
          id: 'contrast-2',
          type: 'contrast',
          severity: 'medium',
          element: 'Navigation Links',
          description: 'Link colors have low contrast against background',
          suggestion: 'Increase contrast ratio',
          fix: 'Use darker text colors or lighter backgrounds'
        },
        {
          id: 'typography-2',
          type: 'typography',
          severity: 'low',
          element: 'Body Text',
          description: 'Line height too tight for readability',
          suggestion: 'Increase line height',
          fix: 'Use leading-relaxed or leading-loose classes'
        }
      ];

      setIssues(detectedIssues);
      
      const results = {
        totalIssues: detectedIssues.length,
        criticalIssues: detectedIssues.filter(i => i.severity === 'critical').length,
        highIssues: detectedIssues.filter(i => i.severity === 'high').length,
        mediumIssues: detectedIssues.filter(i => i.severity === 'medium').length,
        lowIssues: detectedIssues.filter(i => i.severity === 'low').length
      };
      
      setAuditResults(results);
      setIsAuditing(false);
    }, 2000);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'bg-red-500';
      case 'high': return 'bg-orange-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'critical': return <XCircle className="w-4 h-4" />;
      case 'high': return <AlertTriangle className="w-4 h-4" />;
      case 'medium': return <AlertTriangle className="w-4 h-4" />;
      case 'low': return <CheckCircle className="w-4 h-4" />;
      default: return <AlertTriangle className="w-4 h-4" />;
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'contrast': return <Contrast className="w-4 h-4" />;
      case 'typography': return <Type className="w-4 h-4" />;
      case 'spacing': return <Eye className="w-4 h-4" />;
      case 'color': return <Palette className="w-4 h-4" />;
      case 'responsive': return <Smartphone className="w-4 h-4" />;
      case 'accessibility': return <Monitor className="w-4 h-4" />;
      default: return <Eye className="w-4 h-4" />;
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50 max-w-md">
      <Card className="bg-white/95 backdrop-blur-lg border border-gray-200 shadow-2xl">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Eye className="w-5 h-5 text-blue-600" />
            Design Auditor
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {auditResults.totalIssues === 0 ? (
            <div className="text-center py-4">
              <Button 
                onClick={runDesignAudit}
                disabled={isAuditing}
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                {isAuditing ? 'Auditing...' : 'Run Design Audit'}
              </Button>
            </div>
          ) : (
            <>
              {/* Audit Summary */}
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="bg-red-50 p-2 rounded text-center">
                  <div className="font-bold text-red-600">{auditResults.criticalIssues}</div>
                  <div className="text-red-500">Critical</div>
                </div>
                <div className="bg-orange-50 p-2 rounded text-center">
                  <div className="font-bold text-orange-600">{auditResults.highIssues}</div>
                  <div className="text-orange-500">High</div>
                </div>
                <div className="bg-yellow-50 p-2 rounded text-center">
                  <div className="font-bold text-yellow-600">{auditResults.mediumIssues}</div>
                  <div className="text-yellow-500">Medium</div>
                </div>
                <div className="bg-green-50 p-2 rounded text-center">
                  <div className="font-bold text-green-600">{auditResults.lowIssues}</div>
                  <div className="text-green-500">Low</div>
                </div>
              </div>

              {/* Issues List */}
              <div className="max-h-96 overflow-y-auto space-y-2">
                {issues.map((issue) => (
                  <div key={issue.id} className="border border-gray-200 rounded-lg p-3">
                    <div className="flex items-start gap-2">
                      <div className={`p-1 rounded ${getSeverityColor(issue.severity)} text-white`}>
                        {getSeverityIcon(issue.severity)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant="outline" className="text-xs">
                            {getTypeIcon(issue.type)}
                            {issue.type}
                          </Badge>
                          <Badge 
                            className={`text-xs ${getSeverityColor(issue.severity)} text-white`}
                          >
                            {issue.severity}
                          </Badge>
                        </div>
                        <div className="font-semibold text-sm text-gray-900">{issue.element}</div>
                        <div className="text-xs text-gray-600 mb-2">{issue.description}</div>
                        <Alert className="text-xs">
                          <AlertTriangle className="h-3 w-3" />
                          <AlertDescription>
                            <strong>Fix:</strong> {issue.fix}
                          </AlertDescription>
                        </Alert>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <Button 
                onClick={runDesignAudit}
                variant="outline"
                className="w-full"
              >
                Re-run Audit
              </Button>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default DesignAuditor;
